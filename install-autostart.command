#!/bin/zsh
set -e

PROJECT_DIR="/Users/thameem/Downloads/ponkudam"
PLIST="$HOME/Library/LaunchAgents/com.ponkudam.local.plist"
UID_VALUE="$(id -u)"
NPM_BIN="/Users/thameem/.nvm/versions/node/v25.9.0/bin/npm"
NODE_PATH_DIR="/Users/thameem/.nvm/versions/node/v25.9.0/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

mkdir -p "$HOME/Library/LaunchAgents" "$PROJECT_DIR/logs"

cat > "$PLIST" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.ponkudam.local</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/zsh</string>
    <string>-lc</string>
    <string>cd "$PROJECT_DIR" &amp;&amp; export PATH="$NODE_PATH_DIR" &amp;&amp; export npm_config_cache="$PROJECT_DIR/.npm-cache" &amp;&amp; exec "$NPM_BIN" run dev -- --hostname 127.0.0.1 --port 3000</string>
  </array>
  <key>WorkingDirectory</key>
  <string>$PROJECT_DIR</string>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>$PROJECT_DIR/logs/local-server.log</string>
  <key>StandardErrorPath</key>
  <string>$PROJECT_DIR/logs/local-server-error.log</string>
</dict>
</plist>
PLIST

chmod +x "$PROJECT_DIR/scripts/start-local-server.sh" "$PROJECT_DIR/start-local.command"
touch "$PROJECT_DIR/logs/local-server.log" "$PROJECT_DIR/logs/local-server-error.log"

launchctl bootout "gui/$UID_VALUE" "$PLIST" 2>/dev/null || true
launchctl bootstrap "gui/$UID_VALUE" "$PLIST"
launchctl kickstart -k "gui/$UID_VALUE/com.ponkudam.local"

echo ""
echo "Ponkudam local site auto-start is installed."
echo "It will start automatically when you log in."
echo "Open: http://localhost:3000"
echo ""
read -n 1 -s -r "press_any_key?Press any key to close..."
