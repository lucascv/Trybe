#!/bin/bash

read -p "Digite o primeiro numero: " num1
read -p "Digite o segundo numero: " num2

if [ $num1 -gt $num2 ]
then
	echo "$num1 eh maior que $num2"
else
	echo "$num1 nao eh maior que $num2"
fi

