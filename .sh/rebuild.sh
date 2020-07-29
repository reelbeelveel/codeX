#!/bin/bash
# Script modified: Tue July 28, 2020 @ 08:53:26 EDT
npm clean-install
$(git rev-parse --show-toplevel)/.sh/clean.sh 
$(git rev-parse --show-toplevel)/.sh/build.sh
sudo systemctl reload httpd
sudo pm2 restart all

