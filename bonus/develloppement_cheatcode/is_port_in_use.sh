#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Enter the port to check:"
    read port
else
    port=$1
fi
netstat -an | grep $port
