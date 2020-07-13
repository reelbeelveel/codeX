#!/bin/bash
# script revised: Mon July 13, 2020 @ 01:01:39 EDT
echo "  "
echo "######################"
echo " build.sh"
echo "######################"
echo "  "
sudo cp -v /usr/etc/apples2apples/source/a2a.conf /etc/httpd/sites-available/a2a.conf
sudo cp -rv /usr/etc/apples2apples/source/pagesource/* /var/www/a2a/html/
echo "  "
echo "--------------------"
echo "  "
echo "site [a2a] built from pagesource (/usr/etc/apples2apples/source/pagesource/*)";
sudo systemctl reload httpd
echo "httpd reloaded."
echo "  "
echo "===================="
echo "  "
