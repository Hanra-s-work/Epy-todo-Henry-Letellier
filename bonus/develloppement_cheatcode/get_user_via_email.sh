#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Enter the email of the user:"
    read email
else
    email=$1
fi

echo "USE epytodo;SELECT * FROM user WHERE email = '$email';" | mysql -u fox -pfox
