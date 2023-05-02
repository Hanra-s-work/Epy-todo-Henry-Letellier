#!/bin/bash

SUDO=/bin/sudo

sudo systemctl start mariadb

if [ $# -eq 0 ]; then
    # Prompt user for username
    read -p "Enter database username: " db_user

    # Prompt user for password
    read -sp "Enter database password: " db_pass

    echo ''

    # Prompt user for database url
    read -p "Enter database URL (e.g. localhost): " db_url

    # Prompt user for database port
    read -p "Enter database port (e.g. 3306): " db_port

    # Connect to the specified database
    $SUDO mysql -u "${db_user}" -p"${db_pass}" -h "${db_url}" -P "${db_port}"
else
    if [ $# -eq 1 ]; then
        $SUDO mysql -u "${1}"
    fi
    if [ $# -eq 2 ]; then
        $SUDO mysql -u "${1}" -p "${2}"
    fi
    if [ $# -eq 3 ]; then
        $SUDO mysql -u "${1}" -p "${2}" -h "${3}"
    fi
fi
