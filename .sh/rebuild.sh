#!/bin/bash
# Script modified: Fri August 14, 2020 @ 02:11:39 EDT
npm clean-install
$(git rev-parse --show-toplevel)/.sh/clean.sh
$(git rev-parse --show-toplevel)/.sh/build.sh
sudo systemctl restart httpd
sudo pm2 delete codexapp_api
sudo pm2 start codexapp_api.js -i 8 --time --merge-logs -l /web/codeX/logs/pm2-logs

