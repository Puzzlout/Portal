#!/bin/bash
#Thanks to https://stackoverflow.com/a/4486087
#Retrieve the current version in the package.json file
PREV_VERSION=$(sed 's/.*"version": "\(.*\)".*/\1/;t;d' ./package.json)
echo "PREV => "$PREV_VERSION

#Update the last 3 digits of PREV_VERSION and store it in a variable
NEXT_VERSION=$(echo $PREV_VERSION | awk -F. '/[0-9]+\./{$NF++;print}' OFS=.)
echo "NEXT => "$NEXT_VERSION

#update config.js
sed -i 's/'$PREV_VERSION'/'$NEXT_VERSION'/' docs/.vuepress/config.js
#update package.json
sed -i 's/'$PREV_VERSION'/'$NEXT_VERSION'/' package.json
