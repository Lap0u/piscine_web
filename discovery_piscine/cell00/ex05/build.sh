#!/bin/bash

if [ $# -eq '0' ]
then
	echo "No arguments supplied"
	exit 0
fi

for user in "$@" 
do
    user="ex$user"
    mkdir -p $user
    i=$((i + 1));
done