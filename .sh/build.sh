#!/bin/bash
# script revised: Thu August 13, 2020 @ 02:21:24 EDT
echo "  "
echo "######################"
echo " build.sh"
echo "######################"
echo "  "
sudo cp -rv /usr/etc/codeX/pagesource/* /var/www/cdX/html/
sudo cp /usr/etc/codeX/cdX.conf /etc/httpd/sites-available/cdX.conf
echo "  "
echo "--------------------"
echo "  "
echo "site [cdX] built from pagesource (/usr/etc/codeX/pagesource/*)";
sudo systemctl reload httpd
echo "httpd reloaded."
echo "  "
echo "===================="
echo "  "
