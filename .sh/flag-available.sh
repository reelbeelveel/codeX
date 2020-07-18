#!/bin/bash
# script modified: Fri July 17, 2020 @ 12:44:36 EDT

sudo ln -s /etc/httpd/sites-available/cdX.conf /etc/httpd/sites-enabled/cdX.conf
echo "cdX.conf has been symlinked into /etc/httpd/sites-enabled"
echo "Run ./flag-unavailable to remove this link."

