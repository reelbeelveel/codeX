#!/bin/bash
# Script modified: Sun July 26, 2020 @ 01:42:42 EDT
npm clean-install
$(git rev-parse --show-toplevel)/.sh/clean.sh 
$(git rev-parse --show-toplevel)/.sh/build.sh
sudo systemctl reload httpd
sudo pm2 restart index

