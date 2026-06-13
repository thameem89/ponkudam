#!/bin/zsh
set -e

PLIST="$HOME/Library/LaunchAgents/com.ponkudam.local.plist"
UID_VALUE="$(id -u)"

launchctl bootout "gui/$UID_VALUE" "$PLIST" 2>/dev/null || true
rm -f "$PLIST"

echo ""
echo "Ponkudam local site auto-start is removed."
echo ""
read -n 1 -s -r "press_any_key?Press any key to close..."
