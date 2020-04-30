#!/bin/bash

DIRECTORY="~/VS_Code/shellscript/"
if [ -d "$DIRECTORY" ]
  then
    FILES=`ls -l $DIRECTORY | wc -l`
    echo "O $DIRECTORY tem $FILES arquivos."
else
    echo "O argumento $DIRECTORY não é um diretório!"
fi
