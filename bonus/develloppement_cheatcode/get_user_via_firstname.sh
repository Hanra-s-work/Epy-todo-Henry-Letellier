#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Enter the firstname of the user:"
    read firstname
else
    firstname=$1
fi

echo "USE epytodo;SELECT * FROM user WHERE firstname = '$firstname';" | mysql -u fox -pfox
