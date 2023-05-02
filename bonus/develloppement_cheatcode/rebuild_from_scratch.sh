#!/bin/bash

SUDO=/bin/sudo

if [ $# -eq 0 ]; then
    $SUDO docker-compose down --rmi all
    $SUDO docker-compose build
    $SUDO docker-compose up
else
    $SUDO docker-compose down --rmi all
fi
