#!/bin/bash
# Script modified: Mon July 13, 2020 @ 01:03:26 EDT
$(git rev-parse --show-toplevel)/source/.sh/clean.sh 
$(git rev-parse --show-toplevel)/source/.sh/build.sh
sudo systemctl reload httpd
