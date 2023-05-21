SELECT "" "Deploying data";
SELECT "" "Create user accounts";
source "./your_sql/create_sql_user.sql"
SELECT "" "Create location table";
source "./your_sql/where_am_i.sql"
SELECT "" "Create epytodo database";
source "./your_sql/epytodo_empty.sql"
SELECT "" "Create epytodo database";
source "./your_sql/epytodo_empty.sql"
SELECT "" "Fill user table";
source "./your_sql/user_crowder.sql"
SELECT "" "Fill todo table";
source "./your_sql/todo_crowder.sql"
SELECT "" "Data debployed";
