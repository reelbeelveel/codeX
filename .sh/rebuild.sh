#!/bin/bash
# Script modified: Wed August 12, 2020 @ 02:35:14 EDT
npm clean-install
$(git rev-parse --show-toplevel)/.sh/clean.sh
$(git rev-parse --show-toplevel)/.sh/build.sh
sudo systemctl restart httpd
sudo pm2 delete codexapp_api
sudo pm2 start codexapp_api.js -i 32 --time --merge-logs -l /usr/etc/codeX/logs/pm2-logs

