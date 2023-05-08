#!/bin/bash
##
## EPITECH PROJECT, 2022
## B-WEB-200-PAR-2-1-epytodo-henry.letellier
## File description:
## generate_json_secret.sh
##

if [ $# -eq 0 ]; then
    echo "your secret token: $(openssl rand -hex 32)"
else
    echo "This is the random json secret token generator"
fi
