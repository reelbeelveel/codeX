#!/bin/bash
# script revised: Fri July 17, 2020 @ 12:43:34 EDT
echo "  "
echo "######################"
echo " build.sh"
echo "######################"
echo "  "
sudo cp -v /usr/etc/codeX/source/cdX.conf /etc/httpd/sites-available/cdX.conf
sudo cp -rv /usr/etc/codeX/source/pagesource/* /var/www/cdX/html/
echo "  "
echo "--------------------"
echo "  "
echo "site [cdX] built from pagesource (/usr/etc/codeX/source/pagesource/*)";
sudo systemctl reload httpd
echo "httpd reloaded."
echo "  "
echo "===================="
echo "  "
