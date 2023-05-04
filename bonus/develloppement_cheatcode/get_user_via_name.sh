#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Enter the name of the user:"
    read name
else
    name=$1
fi

echo "USE epytodo;SELECT * FROM user WHERE name = '$name';" | mysql -u fox -pfox
