#!/bin/bash
# script modified: Fri July 17, 2020 @ 12:44:59 EDT
sudo rm /etc/httpd/sites-enabled/cdX.conf
echo "cdX.conf has been removed from /etc/httpd/sites-enabled"
echo "run ./flag-available to reactivate the site."
