#!/bin/bash

ARQUIVO="/home/lucas/shellscript/condicional.sh"

if [ -e "$ARQUIVO" ]
then
    echo "O caminho $ARQUIVO está habilitado."
else
    echo "O caminho $ARQUIVO NÃO está habilitado."
fi

if [ -w "$ARQUIVO" ]
then
    echo "Você tem permissão para editar o $ARQUIVO."
else
    echo "Você NÃO tem permissão para editar o $ARQUIVO."
fi

