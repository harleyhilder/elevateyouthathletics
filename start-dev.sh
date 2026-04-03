#!/bin/sh
export PATH="/Users/harleyhilder/.nvm/versions/node/v22.13.1/bin:$PATH"
cd "$(dirname "$0")/frontend"
exec node /Users/harleyhilder/.nvm/versions/node/v22.13.1/bin/npx vite --port 5180
