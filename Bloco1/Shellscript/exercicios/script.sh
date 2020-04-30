#!/bin/bash

echo "Olá, qual seu nome?"

read NOME

echo "Muito prazer, $NOME"

echo "Qual sua idade?"

read IDADE

if [ $IDADE -ge 18 ]
then    
    echo "Maior de idade."
else
    echo "Menor de idade."
fi
