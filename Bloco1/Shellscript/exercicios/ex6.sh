#!/bin/bash

echo "Digite o caminho de um arquivo ou diretório: "
read ARQUIVO

if [ -d "$ARQUIVO" ]
    then
        echo "$ARQUIVO - É um diretório."
elif [ -f "$ARQUIVO" ]
    then
        echo "$ARQUIVO - É um arquivo comum."
else
    echo "$ARQUIVO"
fi
ls -l $ARQUIVO
