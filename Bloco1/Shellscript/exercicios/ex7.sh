#!/bin/bash

ARQUIVO=$1

if [ -d "$ARQUIVO" ]
    then
        echo "$ARQUIVO - É um diretório."
elif [ -f "$ARQUIVO" ]
    then
        echo "$ARQUIVO - É um arquivo comum."
else
    echo "$ARQUIVO - É alguma outra coisa."
fi
ls -l $ARQUIVO
