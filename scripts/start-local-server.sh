#!/bin/zsh
cd /Users/thameem/Downloads/ponkudam
export PATH="/Users/thameem/.nvm/versions/node/v25.9.0/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
export npm_config_cache=/Users/thameem/Downloads/ponkudam/.npm-cache
exec /Users/thameem/.nvm/versions/node/v25.9.0/bin/npm run dev -- --hostname 127.0.0.1 --port 3000
