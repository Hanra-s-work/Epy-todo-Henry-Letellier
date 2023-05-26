# Epy-todo-Henry-Letellier
## About
This is the epy-todo project designed by Epitech in which we need to deploy a database as well as a node.js server whom's role is to allow people to interract with a todo-list.

## Authors:
Henry Letellier
Harleen Sigh Kaur

## Important notice:
If you are from epitech you will receive a -42 if you submit this version of the project.
But do feel free to have a look at how everything is managed

## Grade:
I got 21/22 because I had accidentally added the cors library to the package.json at the source of the project

## How to run the project:
### Requirements

* nodejs: latest
* npm: latest (generaly comes with nodejs)
* mariadb-server: latest
* Docker-compose: latest (for deploying the website)
* postman: latest (for using the existing tests)
* curl: latest (for manual testing)

## Installing the node dependencies
In the root of the project run:
```bash
npm install
```
This will install the node packages that are required for the project.

## Deploying the database:
In a terminal:
* make sure your mariadb-server is running
  * to access mariadb run:
    ```bash
    sudo mariadb
    ```
  * If you see: 
    ```log
    MariaDB [(none)]> 
    ```
  * If this is the case:
    Enter `exit` to exit mariadb
  * Otherwise:
    ```bash
    # replace `apt` by your system package manager: (i.e. `dnf` for Fedora)
    sudo apt update
    sudo apt remove mariadb mariadb-server mysql # remove any version of mariadb
    sudo apt install mariadb-server # install mariadb-server
    sudo systemctl enable mariadb # to allow mariadb to launch on system startup
    sudo systemctl start mariadb # to start mariadb for the current session
    ```
    For Windows and Apple products please read here: [https://mariadb.org/download/](https://mariadb.org/download/)
    You should now be ready to fill the database

* locate the `epytodo.sql` file (at the source of the repository [for empty tables] or `epytodo_full.sql` at bonus->sql_data [For a version with users and todos])
* If you are using the empty version of the tables you will also need the `create_sql_user.sql` located at bonus->sql_data to create non-admin access points to the database (so that the server can actually connect to the database without having to grant admin rigths to the node server)
* If on Linux or Apple (not tested for Apple):
  ```bash
  # for those who chose the empty version of the file:
  cat epytodo.sql | sudo mariadb
  cat bonus/sql_data/create_sql_user.sql | sudo mariadb # (if you are in the same location as the file enter: cat create_sql_user.sql | sudo mariadb)
  # for those who chose the filled version of the file:
  cat epytodo_full.sql | sudo mariadb
  ```
  
* For Windows:
  * Open the command prompt or terminal.
  * Navigate to the directory where the `mysql` command-line tool is located.
      By default, it is usually found in the `bin` directory of your `MariaDB` installation folder.
      i.e. if you installed `MariaDB` in `C:\Program Files\MariaDB`, the command would be: `cd "C:\Program Files\MariaDB\bin"`.
  * Locate the location of the sql files to be deployed
  * store their paths in a text file
    i.e:
    ```txt
    C:\Users\user\Documents\epytodo.sql
    C:\Users\user\Documents\create_sql_user.sql
    ```
    * store the first path in your clipboard
    * Return to your command prompt or terminal
    * Enter:
      ```bat
      mariadb -u root -p<your_root_password> < <path_contained_in_your_clipboard>
      ```
      Tip:
        Replace <your_root_password> by the password you set for the root account
        Replace <path_contained_in_your_clipboard> by the path you copied to your clipboard
  * Repeat these steps as long as you still have paths in your text file

Once you have deployed the data in the database you can verify it by:
* Login into your database
* Entering:
  ```sql
  SHOW DATABASES;
  ```
  Should display the following (somewhere along these lines):
  ```sql
     +--------------------+
     | Database           |
     +--------------------+
     | epytodo            | -- <-- This is the database you should see
     | information_schema |
     | mysql              |
     | performance_schema |
     +--------------------+
     4 rows in set (0.001 sec)
```
If you see the word `epytodo` this means the database has sucessfully been deployed
Otherwise, please refer to the previous steps or internet for a solution

* Check if the tables are present:
  If you exited the database, log back into it
  Entering:
  ```sql
  USE epytodo;SHOW TABLES;
  ```
  Should display the following (somewhere along these lines):
  ```sql
  Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
+-------------------+
| Tables_in_epytodo |
+-------------------+
| todo              | -- <-- This is the todo table (the table that stores the todos of the project)
| user              | -- <-- This is the user table (the table that stores the users of the project)
+-------------------+
2 rows in set (0.000 sec)

MariaDB [epytodo]> -- <-- You can notice that the (none) has now become epytodo due to the line: USE epytodo; specifying the database we are using
```
If you see the words `todo` and `user` this means the tables have sucessfully been deployed
Otherwise, please refer to the previous steps or internet for a solution (this may include manually entering the lines the .sql files contain)

