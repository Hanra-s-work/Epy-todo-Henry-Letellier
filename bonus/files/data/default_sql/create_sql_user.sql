SELECT "" "Listing all users:";
SELECT user,host,password_expired,Password FROM mysql.user;

SELECT "" "User privileges:";
SHOW GRANTS;

SELECT "" "Removing existing users:";
DROP USER IF EXISTS 'fox';
DROP USER IF EXISTS 'lumine';
DROP USER IF EXISTS 'tails';

SELECT "" "Creating user 'fox' on 'localhost':";
CREATE USER IF NOT EXISTS 'fox'@'localhost' IDENTIFIED BY 'fox';
GRANT ALL PRIVILEGES ON *.* TO `fox`@'localhost';
SELECT "" "Created user 'fox' on 'localhost'.";

SELECT "" "Creating user 'lumine' on 'localhost':";
CREATE USER IF NOT EXISTS 'lumine' @'localhost' IDENTIFIED BY 'lumine';
GRANT ALL PRIVILEGES ON *.* TO `lumine`@'localhost';
SELECT "" "Created user 'lumine' on 'localhost'.";

SELECT "" "Creating user 'tails' on 'localhost':";
CREATE USER IF NOT EXISTS 'tails' @'localhost' IDENTIFIED BY 'tails';
GRANT ALL PRIVILEGES ON *.* TO `tails`@'localhost';
SELECT "" "Created user 'tails' on 'localhost'.";
