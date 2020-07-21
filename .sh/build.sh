#!/bin/bash
# script revised: Fri July 17, 2020 @ 10:49:21 EDT
echo "  "
echo "######################"
echo " build.sh"
echo "######################"
echo "  "
sudo cp -v /usr/etc/codeX/cdX.conf /etc/httpd/sites-available/cdX.conf
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
