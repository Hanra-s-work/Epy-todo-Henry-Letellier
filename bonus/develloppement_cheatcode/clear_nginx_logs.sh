#!/bin/bash
##
## EPITECH PROJECT, 2022
## epytodo_set_up
## File description:
## clear_nginx_logs.sh
##

SUDO=/bin/sudo

if [ $# -eq 0 ]; then
    if [ -d ./files/html/server_data/logs ]; then
        $SUDO echo "" >./files/html/server_data/logs/access.log
        $SUDO echo "" >./files/html/server_data/logs/error.log
    elif [ -d ../files/html/server_data/logs ]; then
        $SUDO echo "" >../files/html/server_data/logs/access.log
        $SUDO echo "" >../files/html/server_data/logs/error.log
    else
        echo "No logs to clear"
    fi
fi
