#!/usr/bin/env bash

npm run build

if [ $? -eq 0 ];then
    echo 'build success';
#    cp ./src/assets/lib/jweixin-1.2.0.js ./dist/
#    if [ $? -eq 0 ];then
#        echo 'cp success';
#    else
#        echo 'cp error';
#    fi
else
    echo 'build error';
fi





