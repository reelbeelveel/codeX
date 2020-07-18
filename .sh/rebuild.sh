#!/bin/bash
# Script modified: Fri July 17, 2020 @ 10:50:03 EDT
$(git rev-parse --show-toplevel)/.sh/clean.sh 
$(git rev-parse --show-toplevel)/.sh/build.sh
sudo systemctl reload httpd
