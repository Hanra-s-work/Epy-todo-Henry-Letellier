#!/bin/bash

WAS_INSTALLED=0

if [ $# -eq 0 ]; then
    CHECK_DNF=$(dnf --version) 2>/dev/null
    CHECK_YUM=$(yum --version) 2>/dev/null
    if [ ${#CHECK_DNF} -ge 1 ]; then
        sudo dnf install mariadb-server
        WAS_INSTALLED=1
    else
        if [ ${#CHECK_YUM} -ge 1 ]; then
            sudo yum install mariadb-server
            WAS_INSTALLED=1
        else
            echo "The package manager that your system is using is not supported by this script"
            echo "For more information about how to install MariaDB for your system"
            echo "Please refer to the website: https://mariadb.com/kb/en/getting-installing-and-upgrading-mariadb/"
        fi
    fi
fi

# MariaDB uses the mysql binding to initiate connections
MARIADB_EXISTS=$(mysql --version) 2>/dev/null

if [ $WAS_INSTALLED -eq 1 ] && [ ${#MARIADB_EXISTS} -ge 1 ]; then
    echo "Starting mariadb"
    sudo systemctl start mariadb
    echo "Enabeling mariadb on start"
    sudo systemctl enable mariadb
    echo "Displaying the status of mariadb (press the Q key to quit)"
    sudo systemctl status mariadb
fi
