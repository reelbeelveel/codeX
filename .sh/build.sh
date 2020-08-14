#!/bin/bash
# script revised: Fri August 14, 2020 @ 02:12:03 EDT
echo "  "
echo "######################"
echo " build.sh"
echo "######################"
echo "  "
sudo cp -rv /web/codeX/pagesource/* /var/www/cdX/html/
sudo cp /web/codeX/cdX.conf /etc/httpd/sites-available/cdX.conf
echo "  "
echo "--------------------"
echo "  "
echo "site [cdX] built from pagesource (/usr/etc/codeX/pagesource/*)";
sudo systemctl reload httpd
echo "httpd reloaded."
echo "  "
echo "===================="
echo "  "
