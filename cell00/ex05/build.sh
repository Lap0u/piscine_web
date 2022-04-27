#!/bin/bash

if [ $# -eq '0' ]
then
	echo "No arguments supplied"
fi

for user in "$@" 
do
    user="ex$user"
    mkdir -p $user
    i=$((i + 1));
done