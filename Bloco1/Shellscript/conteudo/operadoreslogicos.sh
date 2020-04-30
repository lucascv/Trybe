#!/bin/bash

if [ $USER = root ] && [ -x operadoreslogicos.sh ]
then
	echo "O usuario eh o $USER e tem permissao sobre o arquivo"
else
	echo "Ou o usuario nao eh o root ou nao tem permissao sobre arquivo"
fi

