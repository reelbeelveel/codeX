#!/bin/bash
# Script modified: Sun July 19, 2020 @ 11:07:50 EDT
$(git rev-parse --show-toplevel)/.sh/clean.sh 
$(git rev-parse --show-toplevel)/.sh/build.sh
sudo systemctl reload httpd
sudo pm2 restart index

