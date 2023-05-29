# Epy-todo-Henry-Letellier

## Table Of Contents

- [About](#about)
- [Authors](#authors)
- [Important Notice](#important-notice)
- [Grade](#grade)
- [How to make the project run](#how-to-make-the-project-run)
  - [Project Requirements](#project-requirements)
  - [Installing the node dependencies](#installing-the-node-dependencies)
  - [Deploying the database](#deploying-the-database)
    - [Verify that the data has been deployed](#verify-that-the-data-has-been-deployed)
  - [Starting the sever](#starting-the-server)
- [Making calls to the server](#making-calls-to-the-server)
  - [Using Curl](#using-curl)
  - [Using Postman](#using-postman)
- [Use the website](#use-the-website)
  - [Website Requirements](#website-requirements)
  - [Build](#build)
  - [Deploy Locally](#deploy-locally)
    - [Epilepsia warning](#epilepsia-warning)
  - [Access Website](#access-website)
  - [Troubleshooting](#troubleshooting)
    - [Is docker installed](#is-docker-installed)
    - [Is docker-compose installed](#is-docker-compose-installed)
    - [Is it the docker database](#is-it-the-docker-database)
      - [Reset the MariaDB docker cache](#reset-the-mariadb-docker-cache)
    - [Is it the docker nodejs](#is-it-the-docker-nodejs)
    - [Is it the docker nginx sever](#is-it-the-docker-nginx-sever)
- [License](#license)

## About

This is the epy-todo project designed by Epitech in which we need to deploy a database as well as a node.js server whom's role is to allow people to interract with a todo-list.

## Authors

Henry Letellier
Harleen Sigh Kaur

## Important Notice

If you are from Epitech you will receive a -42 if you submit this version of the project.
But do feel free to have a look at how everything is managed

## Grade

I got 21/22 because I had accidentally added the cors library to the package.json at the source of the project

## How to make the project run

### Project Requirements

- nodejs: latest
- npm: latest (generally comes with nodejs)
- mariadb-server: latest
- Docker-compose: latest (for deploying the website)
- postman: latest (for using the existing tests)
- curl: latest (for manual testing)

### Installing the node dependencies

In the root of the project run:

```bash
npm install
```

This will install the node packages that are required for the project.

### Deploying the database

In a terminal:

- make sure your mariadb-server is running
  - to access mariadb run:

    ```bash
    sudo mariadb
    ```

  - If you see:

    ```log
    MariaDB [(none)]> 
    ```

  - If this is the case:
    Enter `exit` to exit mariadb
  - Otherwise:

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

- locate the `epytodo.sql` file (at the source of the repository [for empty tables] or `epytodo_full.sql` at bonus->sql_data [For a version with users and todos])
- If you are using the empty version of the tables you will also need the `create_sql_user.sql` located at bonus->sql_data to create non-admin access points to the database (so that the server can actually connect to the database without having to grant admin rigths to the node server)
- If on Linux or Apple (not tested for Apple):

  ```bash
  # for those who chose the empty version of the file:
  cat epytodo.sql | sudo mariadb
  cat bonus/sql_data/create_sql_user.sql | sudo mariadb # (if you are in the same location as the file enter: cat create_sql_user.sql | sudo mariadb)
  # for those who chose the filled version of the file:
  cat epytodo_full.sql | sudo mariadb
  ```
  
- For Windows:
  - Open the command prompt or terminal.
  - Navigate to the directory where the `mysql` command-line tool is located.
      By default, it is usually found in the `bin` directory of your `MariaDB` installation folder.
      i.e. if you installed `MariaDB` in `C:\Program Files\MariaDB`, the command would be: `cd "C:\Program Files\MariaDB\bin"`.
  - Locate the location of the sql files to be deployed
  - store their paths in a text file
    i.e:

    ```txt
    C:\Users\user\Documents\epytodo.sql
    C:\Users\user\Documents\create_sql_user.sql
    ```

    - store the first path in your clipboard
    - Return to your command prompt or terminal
    - Enter:

      ```bat
      mariadb -u root -p<your_root_password> < <path_contained_in_your_clipboard>
      ```

      Tip:
        Replace <your_root_password> by the password you set for the root account
        Replace <path_contained_in_your_clipboard> by the path you copied to your clipboard
  - Repeat these steps as long as you still have paths in your text file

#### Verify that the data has been deployed

Once you have deployed the data in the database you can verify it by:

- Login into your database
- Entering:

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

If you see the word `epytodo` this means the database has successfully been deployed
Otherwise, please refer to the previous steps or internet for a solution

- Check if the tables are present:
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
  
  MariaDB [epytodo]> -- <-- You can notice that the (none) has now become epytodo due to the line: 'USE epytodo; specifying the database we are using'
  ```

If you see the words `todo` and `user` this means the tables have successfully been deployed
Otherwise, please refer to the previous steps or internet for a solution (this may include manually entering the lines the .sql files contain)

### Starting the server

## Making calls to the server

### Using Curl

### Using postman

## Use the website

## Website Requirements

- Docker
- Docker-compose

### Build

To build the website:

- Go to the folder `bonus->deploy`

  Note: You should see a `docker-compose.yml` file

- In your terminal (or command prompt):
  - Make sure you are located in `bonus->deploy`
  - Run the following command for Linux and Apple:

```bash
sudo docker-compose build
```

- Run the following command for Windows:

```bat
docker-compose build
```

- During the build process it is normal that you see some red lines. These red lines generally inform that there is a new version of a dependency used by one of the images

- However, if you have a message containing a not-found or a similar error
  - You should a docker error message such as `build status failed` or `build exited 1` or `build exit code 1`
  - Please refer to the trobleshooting section for more information.

### **Deploy Locally**

To access the website you need to finish the deployement (you need to start the images you built).

- If you aren't already in the folder `bonus->deploy`
  - navigate to that folder in your terminal (or command prompt)
- In your terminal (or command prompt):
  - Make sure you are located in `bonus->deploy`
  - Run the following command for Linux and Apple:

```bash
sudo docker-compose up
```

- Run the following command for Windows:

```bat
docker-compose up
```

> **Note:** It may take the nodejs server (i.e. `et-nodejs`) a few tries before it succeeds. (once it has succeeded the prompt should come to a stop and the following message should appear: `Server running on port 3000 at http://localhost:3000` and on the next line `connected as id 3` [note: the id might not always be the same and this is normal])

#### Epilepsia warning

- **Epilepsia warning**: depending on the system Docker-compose uses colours to help the programmer differenciate between the different docker images, if you wish to start the image, run this command:

- For Linux and Apple:

```bash
sudo docker-compose up | sed -r "s/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]//g"
```

- For Windows (not tested):
  - For powershell

```powershell
docker-compose up | ForEach-Object { $_ -replace '\x1b\[[0-9;]*[mG]', '' }
```

- For the command prompt:
  - you will need an external tool such as [ansicon](https://github.com/adoxa/ansicon/releases): [https://github.com/adoxa/ansicon/releases](https://github.com/adoxa/ansicon/releases)

    - **Installation**:
      1. Open a web browser and visit the ansicon GitHub repository: <https://github.com/adoxa/ansicon/releases>
      2. Download the latest release of ansicon by clicking on the "ansicon.zip" file under the latest release version.
      3. Extract the downloaded `ZIP` file to a suitable location on your computer.

      For example, you can create a folder named `ansicon` in your user directory (e.g., `C:\Users\YourUsername\ansicon`).
      Ps: YourUsername is the name of your account (the folder located in `C:\Users`)
    - **Adding ansicon to the PATH variable**
      In order to call the `ansicon` program without having to rember the exact path to the executable, it is necessary to add its path to the `PATH` system variable.

      Here is how to do it:
        1. Open the Start menu and search for "**Environment Variables**".

        2. Select the option that says "**Edit the system environment variables**".

        3. In the System Properties window that appears, click on the "**Environment Variables**" button.

        4. In the "**Environment Variables**" window, under the "System variables" section, locate the `Path` variable and click on the "Edit" button.
        5. In the "Edit Environment Variable" window, click on the "New" button to add a new entry.
        6. Type or paste the full path to the `ansicon` directory in the "New Variable Value" field. For example, if you extracted ansicon to `C:\Users\YourUsername\ansicon`, add `C:\Users\YourUsername\ansicon` to the list.
        7. Click "**OK**" to save the new entry.
        8. Click "**OK**" again to close the "Environment Variables" window.
        9. Click "**OK**" once more to close the "System Properties" window.
    - Using ansicon in the Command Prompt
      1. Open a Command Prompt window.
      2. Run the following command to enable ANSI escape sequence processing in CMD

      ```bat
      REM This command sets up ansicon to process ANSI escape sequences and remove color codes from the output.
      ansicon -p
      ```

      3. You can now use ansicon to remove color codes from the output of a command.
      For example, to run a command and remove the colors, use the following syntax

      ```bat
      REM This function runs asincon, that runs the command prompts that will in its turn display the content of a directory.
      ansicon -r -c -s -e "C:\Windows\System32\cmd.exe /c dir"
      REM this is if you need to run it in a .bat file
      REM otherwise here is the same command you can do in the cmd.exe program (commonly known as the command prompt)
      dir | ansicon -p
      ```

  - Here is the line to run the docker-compose without colour:

    ```bat
    docker-compose up | ansicon
    REM if you are in a .bat file the following command is for you
    ansicon -r -c -s -e "C:\Windows\System32\cmd.exe /c cd 'path/to/the/docker-compose-file/' && docker-compose up"
    ```

- Another solution would be to disable colours altogether in the settings panel of your shell/command prompt

### Access Website

Once your docker-compose file is up and running you can fire up your favorite browser and enter `http://localhost/`
If everything is up and running correctly, you should see a webpage be displayed.

### Troubleshooting

#### **Before we start**

Here are a few things to know when in a docker container:
> **Note 1:** The database password is `root` and the password is `root`.

> **Note 2:** If you are a Windows user, when you are in a docker, please follow the linux provided commands

> **Note 3:** When in a docker, you a root by default, this means that you can ignore the `sudo` word when typing commands in

#### **Is docker installed**

If you encounter issues while trying to use the website, the first thing to check is whether Docker is installed on your system. Docker is a containerization platform that is required to run the website locally. Follow the instructions below to check if Docker is installed:

> ***Linux***

  1. Open a terminal.
  2. Run the following command:

```bash
docker --version # This will display the version of Docker installed, if any.
```

  3. If Docker is not installed, you can follow the official Docker documentation for Linux to install it.

> ***Windows***

  1. Open a command prompt or PowerShell.
  2. Enter the following command:

```bat
REM This command will show the Docker version if it is installed.
docker --version
```

  3. If Docker is not installed, you can refer to the official Docker documentation for Windows for installation instructions.

> ***Apple***

  1. Open a terminal.
  2. Run the following command:

```bash
docker --version # This will display the version of Docker installed, if any.
```

  3. If Docker is not installed, you can visit the official Docker documentation for macOS to install it.

Make sure that Docker is installed and running properly before proceeding to the next troubleshooting steps. If Docker is already installed, continue with the following sub-sections to identify and resolve other potential issues.

#### **Is docker-compose installed**

> ***Linux***

1. Open a terminal.
2. Run the following command:

```bash
docker-compose --version
```

3. This will display the version of Docker Compose installed, if any.

If Docker Compose is not installed, you can follow the official Docker Compose documentation for Linux to install it.

> ***Windows and Mac***

*Docker Desktop for Windows and Docker Desktop for Mac generally include Docker Compose.*

*If you have Docker Desktop installed, Docker Compose should already be available on your system.*

To check if Docker Compose is installed, follow these steps:

1. Open a command prompt or terminal.
2. Run the following command:

```batch
docker-compose --version
```

3. This command will show the version of Docker Compose installed, if any.

```md
If Docker Compose is not installed or not detected, you can refer to the official Docker documentation for Windows or Mac for installation instructions.
```

Ensure that Docker Compose is installed and up-to-date on your system before proceeding to the next troubleshooting steps.

If Docker Compose is already installed, you can move on to resolving other potential issues.

#### **Is it the docker database**

If you think the database is the issue, start the docker-compose up.
While the docker-compose is running, open a new terminal and type:

- for Linux and Apple:

```bash
sudo docker exec -it et-mariadb /bin/bash
```

- for Windows:

```batch
docker exec -it et-mariadb /bin/bash
```

If you are succesefully conected, you should see you prompt default to `root@<id_of_the_docker>:/app` where `<id_of_the_docker>` is the identifier of the container in which you are located.

Then follow the [Verify that the data has been deployed](#verify-that-the-data-has-been-deployed) section.

If you realise that the database is not present:

- You can stop the `docker-compose` using the `[CTRL]`+`C` keys (`[CMD]`+`C` if `[CTRL]`+`C` did not work for mac users).
- You can now make sure that the `default_sql` folder located in `bonus -> deploy -> data` folders contains the file `data.sql` with the content of the databases.

If the file is present, I recommend you reset the cache by following the [Reset the MariaDB docker cache](#reset-the-mariadb-docker-cache)

If for some reason the file is empty or missing, use the content of the `epytodo_full.sql` file.

This can be done by replacing the file `data.sql` (located in `bonus -> deploy -> data -> default_sql`) by `epytodo_full.sql` (located in `bonus -> sql_data`) you do not need to rename the file because the only the content gets used by the container.

##### **Reset the MariaDB docker cache**

Once you have updated the sql file, it is necessary to reset the docker's cache.

It is located in `bonus -> deploy -> data -> current_state` folder.

If you are under Windows, you should normally be able to remove the contents of the folder without much difficulty.

However, if you do encounter a difficulty:

- open a command-prompt with administrator privileges
- Navigate to the folder using `cd "your/path"`
- Execute the following command:

```batch
REM remove all the content of the folder regardles the directories contained in it
del /s /q .\current_state\*
```

If you are under Apple or Linux:

- Open a new terminal
- Navigate to the folder using `cd "your/path"`
- Execute the following command:

```bash
# remove all the content of the folder regardless the directories or the author of the files
sudo rm -rf ./current_state/*
```

You can now restart the `docker-compose` app by running:

- For Apple an Linux:

```bash
# Clear all existing containers and images linked to this project (this does not concern the images pulled from the internet)
#  And build the containers from the ground up
sudo docker-compose down --rmi all
# Start the containers
sudo docker-compose up # <-- do not run this command if you have epilepsia
#  For people with epilepsia for the startup sequence please refer to the Epilepsia warning (link below)
```

Epilepsia link: [Epilepsia warning](#epilepsia-warning)

If everything was successful you should be able to access the website by following this section: [Access Website](#access-website)

#### **Is it the docker nodejs**

If you think the nodejs docker is to blame, try the following steps:

- Start the `docker-compose` by following this section: [Deploy Locally](#deploy-locally)
- Open a new terminal and enter the following command:

For Apple and Linux users:

```bash
# This command will allow you to enter the docker container for the nodejs application
sudo docker exec -it et-nodejs /bin/bash
```

For Windows users:

```batch
docker exec -it et-nodejs /bin/bash
```

Once in the container (you should see the prompt change to )

##### Common node.js errors for this project

###### "ER_BAD_DB_ERROR" (or Unknown database 'epytodo')

zezeze

###### "ER_ACCESS_DENIED_ERROR"

jjpojopjj

###### "ER_NO_SUCH_TABLE"

kdfosdfdsf

###### "ECONNREFUSED"

azeazeaze

#### **Is it the docker nginx sever**

## License

This program is provided as if and without any warranty.
This program is under the `UNLICENSE` license
