#!/bin/bash
# script revised: Fri July 24, 2020 @ 12:39:00 EDT
echo "  "
echo "######################"
echo " build.sh"
echo "######################"
echo "  "
sudo cp -rv /usr/etc/codeX/pagesource/* /var/www/cdX/html/
echo "  "
echo "--------------------"
echo "  "
echo "site [cdX] built from pagesource (/usr/etc/codeX/pagesource/*)";
sudo systemctl reload httpd
echo "httpd reloaded."
echo "  "
echo "===================="
echo "  "
