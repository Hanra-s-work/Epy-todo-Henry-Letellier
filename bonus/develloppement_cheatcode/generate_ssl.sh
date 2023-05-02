#!/bin/bash
##
## EPITECH PROJECT, 2022
## epytodo_set_up
## File description:
## generate_ssl.sh
##

SSL_FOLD=ssl
SSL_KEY_FOLD=$SSL_FOLD/key
SSL_PRIVATE_KEY_FOLD=$SSL_FOLD/private_key
SSL_CSR_FOLD=$SSL_FOLD/csr
SSL_CRT_FOLD=$SSL_FOLD/crt
SSL_CRT_COMBINED_FOLD=$SSL_FOLD/crt_combined
SSL_CERTIFICAT_FOLD=$SSL_FOLD/certificat

DIGICERT_URL="https://cacerts.digicert.com/DigiCertG5TLSECCSHA3842021CA1-1.crt"
DIGICERT_NAME="TLS_ECC_SHA384"

function check_if_openssl_exits() {
    if [ ! -f /usr/bin/openssl ]; then
        echo "openssl is not installed"
        exit 1
    fi
}

function check_if_folders_exits() {
    if [ ! -d $SSL_FOLD ]; then
        mkdir -p $SSL_FOLD
    fi
    # if [ ! -d $SSL_KEY_FOLD ]; then
    #     mkdir -p $SSL_KEY_FOLD
    # fi
    if [ ! -d $SSL_PRIVATE_KEY_FOLD ]; then
        mkdir -p $SSL_PRIVATE_KEY_FOLD
    fi
    if [ ! -d $SSL_CSR_FOLD ]; then
        mkdir -p $SSL_CSR_FOLD
    fi
    if [ ! -d $SSL_CRT_FOLD ]; then
        mkdir -p $SSL_CRT_FOLD
    fi
    # if [ ! -d $SSL_CERTIFICAT_FOLD ]; then
    #     mkdir -p $SSL_CERTIFICAT_FOLD
    # fi
    if [ ! -d $SSL_CRT_COMBINED_FOLD ]; then
        mkdir -p $SSL_CRT_COMBINED_FOLD
    fi
}

function generate_private_key() {
    openssl genrsa -out $SSL_PRIVATE_KEY_FOLD/private.key 2048
}

function generate_csr_key() {
    openssl req -new -key $SSL_PRIVATE_KEY_FOLD/private.key -out $SSL_CSR_FOLD/server.csr
}

function apply_correct_rights() {
    chmod 400 $SSL_PRIVATE_KEY_FOLD/private.key
    chmod 400 $SSL_CSR_FOLD/server.csr
    chmod 400 $SSL_CRT_FOLD/server.crt
    chmod 400 $SSL_CRT_COMBINED_FOLD/bundle.crt
}

function combine_crt_with_digicert_crt() {
    curl -LO $DIGICERT_URL -o $SSL_CRT_COMBINED_FOLD/$DIGICERT_NAME
    cat $SSL_CRT_FOLD/*.crt $SSL_CRT_COMBINED_FOLD/$DIGICERT_NAME >>$SSL_CRT_COMBINED_FOLD/bundle.crt
    rm $SSL_CRT_COMBINED_FOLD/$DIGICERT_NAME
}

function generate_ssl() {
    generate_private_key
    generate_csr_key
    openssl x509 -req -days 365 -in $SSL_CSR_FOLD/server.csr -signkey $SSL_PRIVATE_KEY_FOLD/private.key -out $SSL_CRT_FOLD/server.crt
}

if [ $# -eq 0 ]; then
    check_if_openssl_exits
    check_if_folders_exits
    generate_ssl
    combine_crt_with_digicert_crt
    apply_correct_rights
fi
