#!/bin/bash

arquivo=~/shellscript/Desktop/lista.txt

for nomes in `cat $arquivo`
do
	echo $nomes
done

