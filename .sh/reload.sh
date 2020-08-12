#!/bin/bash
# Script modified: Wed August 12, 2020 @ 02:32:50 EDT
sudo systemctl reload httpd
sudo pm2 restart all
