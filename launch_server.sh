#!/bin/bash
if [ $# -eq 0 ]; then
    while [ 1 -eq 1 ]; do
        npm start
        sleep 1
    done
elif [ $# -eq 1 ]; then
    while [ 1 -eq 1 ]; do
        npm test
        sleep 1
    done
else
    echo "Usage: launch_server.sh [debug]"
fi
