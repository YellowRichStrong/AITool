#!/bin/bash

# Sitemap Update Script
# This script updates the sitemap.xml file for the website

# Set the working directory to the script's directory
cd "$(dirname "$0")"

# Get current date and time for logging
CURRENT_TIME=$(date +"%Y-%m-%d %H:%M:%S")

# Log the start of the process
echo "[$CURRENT_TIME] Starting sitemap update process..."

# Run the Python sitemap generator
if command -v python3 >/dev/null 2>&1; then
    python3 update-sitemap.py
    RESULT=$?
    if [ $RESULT -eq 0 ]; then
        echo "[$CURRENT_TIME] Sitemap update completed successfully"
    else
        echo "[$CURRENT_TIME] Error occurred during sitemap update (exit code: $RESULT)"
        exit $RESULT
    fi
else
    echo "[$CURRENT_TIME] Error: Python3 is not installed or not in PATH"
    exit 1
fi

# Optional: Submit sitemap to search engines (uncomment to enable)
# echo "[$CURRENT_TIME] Submitting sitemap to search engines..."
# curl -s "https://www.google.com/ping?sitemap=https://ballstar.cc/sitemap.xml" > /dev/null
# curl -s "https://bing.com/ping?sitemap=https://ballstar.cc/sitemap.xml" > /dev/null

echo "[$CURRENT_TIME] Sitemap update process finished"