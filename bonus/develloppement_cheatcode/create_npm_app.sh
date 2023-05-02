#!/bin/bash

SUDO=/bin/sudo

if [ $# -eq 0 ]; then
    npm init
    npm install express --save
    npm install mysql --save
fi
