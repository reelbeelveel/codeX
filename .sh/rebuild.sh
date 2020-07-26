#!/bin/bash
# Script modified: Sat July 25, 2020 @ 03:19:30 EDT
npm install
$(git rev-parse --show-toplevel)/.sh/clean.sh 
$(git rev-parse --show-toplevel)/.sh/build.sh
sudo systemctl reload httpd
sudo pm2 restart index

