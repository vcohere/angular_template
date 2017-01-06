#!/bin/sh

if [ -z "$1" ]
then
	echo "Error: Missing feature name"
else
	mkdir ./app/components/$1
	home="./app/components/home/home"
	feature="./app/components/$1/$1"
	cat $home.controller.js | sed "s/home/$1/g" > $feature.controller.js
	cat $home.service.js | sed "s/home/$1/g" > $feature.service.js
	cat $home.html | sed "s/home/$1/g" > $feature.html
	cat $home.scss | sed "s/home/$1/g" > $feature.scss
	echo "don't forget to add controller/service dependencies in your index.html"
	echo "<script type=\"text/javascript\" src=\"components/$1/$1.controller.js\"></script>"
	echo "<script type=\"text/javascript\" src=\"components/$1/$1.service.js\"></script>"
	echo "\ndon't forget to add service dependencies in js/module.js"
fi
