#!/bin/bash
# script modified: Mon July 06, 2020 @ 05:09:17 EDT

sudo ln -s /etc/httpd/sites-available/a2a.conf /etc/httpd/sites-enabled/a2a.conf
echo "a2a.conf has been symlinked into /etc/httpd/sites-enabled"
echo "Run ./flag-unavailable to remove this link."

