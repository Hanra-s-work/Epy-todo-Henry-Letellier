#!/bin/bash

SUDO=/bin/sudo

if [ $# -eq 0 ]; then
    npm init
    npm install express --save
    npm install mysql2 --save
    npm install dotenv --save
    npm install jsonwebtoken --save
    npm install bcryptjs --save
    npm install body-parser --save
fi
