#!/usr/bin/env bash

# cp file except svn/git

cd ../htmles
find * -maxdepth 0 -name '.svn' -prune -o -exec rm -rf '{}' ';'
cd ../elle
cp -R html/. ../htmles/







