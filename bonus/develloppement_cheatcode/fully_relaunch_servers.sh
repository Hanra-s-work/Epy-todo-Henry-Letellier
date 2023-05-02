#!/bin/bash
##
## EPITECH PROJECT, 2022
## epytodo_set_up
## File description:
## fully_relaunch_servers.sh
##

SUDO=/bin/sudo

if [ $# -eq 0 ]; then
    if [ -f docker-compose.yml ]; then
        $SUDO docker-compose down &&
            $SUDO docker-compose build &&
            $SUDO docker-compose up
    fi
fi
