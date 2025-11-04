#!/bin/bash

# Setup Script for Sitemap Auto Update
# This script helps set up a cron job for automatic sitemap updates

echo "=== Sitemap Auto Update Setup ==="
echo

# Get the current directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRIPT_PATH="$SCRIPT_DIR/update-sitemap.sh"
LOG_PATH="$SCRIPT_DIR/sitemap-update.log"

echo "Script directory: $SCRIPT_DIR"
echo "Script path: $SCRIPT_PATH"
echo "Log path: $LOG_PATH"
echo

# Check if script exists
if [ ! -f "$SCRIPT_PATH" ]; then
    echo "❌ Error: Script file not found at $SCRIPT_PATH"
    exit 1
fi

# Check if script is executable
if [ ! -x "$SCRIPT_PATH" ]; then
    echo "⚠️  Making script executable..."
    chmod +x "$SCRIPT_PATH"
fi

echo "✅ Script is ready"
echo

# Show current crontab
echo "Current crontab:"
crontab -l 2>/dev/null || echo "No crontab found"
echo

# Ask user for update frequency
echo "Select update frequency:"
echo "1) Daily (recommended)"
echo "2) Weekly"
echo "3) Monthly"
echo "4) Custom"
echo

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        # Daily at 2:00 AM
        CRON_TIME="0 2 * * *"
        FREQUENCY="daily"
        ;;
    2)
        # Weekly on Sunday at 2:00 AM
        CRON_TIME="0 2 * * 0"
        FREQUENCY="weekly"
        ;;
    3)
        # Monthly on 1st at 2:00 AM
        CRON_TIME="0 2 1 * *"
        FREQUENCY="monthly"
        ;;
    4)
        echo "Enter custom cron time (e.g., '0 2 * * *' for daily at 2 AM)"
        read -p "Custom cron time: " CRON_TIME
        FREQUENCY="custom"
        ;;
    *)
        echo "Invalid choice. Using daily update."
        CRON_TIME="0 2 * * *"
        FREQUENCY="daily"
        ;;
esac

# Create cron job entry
CRON_JOB="$CRON_TIME $SCRIPT_PATH >> $LOG_PATH 2>&1"

echo
echo "Setting up $FREQUENCY sitemap update..."
echo "Cron job: $CRON_JOB"
echo

# Add to crontab
(crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -

if [ $? -eq 0 ]; then
    echo "✅ Cron job successfully added!"
    echo
    echo "=== Setup Complete ==="
    echo "Your sitemap will be automatically updated $FREQUENCY."
    echo "Logs will be saved to: $LOG_PATH"
    echo
    echo "To verify the cron job, run: crontab -l"
    echo "To view logs, run: tail -f $LOG_PATH"
    echo "To remove the cron job, run: crontab -r"
else
    echo "❌ Failed to add cron job"
    exit 1
fi