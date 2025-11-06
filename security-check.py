#!/usr/bin/env python3
"""
Security Check Script for Ballstar Website
This script checks the security configuration of the website.
"""

import os
import sys
from datetime import datetime

def check_robots_txt():
    """Check robots.txt configuration"""
    robots_path = 'robots.txt'
    if not os.path.exists(robots_path):
        print("❌ robots.txt not found")
        return False
    
    with open(robots_path, 'r') as f:
        content = f.read()
        
    required_elements = [
        'Crawl-delay: 10',
        'Disallow: /iphone/',
        'Disallow: /images/',
        'User-agent: MJ12bot',
        'User-agent: AhrefsBot'
    ]
    
    missing = []
    for element in required_elements:
        if element not in content:
            missing.append(element)
    
    if missing:
        print(f"❌ Missing in robots.txt: {missing}")
        return False
    else:
        print("✅ robots.txt configuration is correct")
        return True

def check_htaccess():
    """Check .htaccess configuration"""
    htaccess_path = '.htaccess'
    if not os.path.exists(htaccess_path):
        print("❌ .htaccess not found")
        return False
    
    with open(htaccess_path, 'r') as f:
        content = f.read()
        
    required_elements = [
        'RewriteEngine on',
        'RewriteCond %{HTTP_REFERER}',
        'nba110.com',
        'FilesMatch'
    ]
    
    missing = []
    for element in required_elements:
        if element not in content:
            missing.append(element)
    
    if missing:
        print(f"❌ Missing in .htaccess: {missing}")
        return False
    else:
        print("✅ .htaccess configuration is correct")
        return True

def check_html_meta():
    """Check HTML meta tags for security"""
    html_path = 'index.html'
    if not os.path.exists(html_path):
        print("❌ index.html not found")
        return False
    
    with open(html_path, 'r') as f:
        content = f.read()
        
    required_elements = [
        '<meta name="referrer" content="same-origin">',
    ]
    
    missing = []
    for element in required_elements:
        if element not in content:
            missing.append(element)
    
    if missing:
        print(f"❌ Missing in HTML: {missing}")
        return False
    else:
        print("✅ HTML security meta tags are correct")
        return True

def check_security_md():
    """Check SECURITY.md exists"""
    security_path = 'SECURITY.md'
    if not os.path.exists(security_path):
        print("❌ SECURITY.md not found")
        return False
    else:
        print("✅ SECURITY.md exists")
        return True

def main():
    """Main function to run all checks"""
    print(f"🔒 Ballstar Website Security Check - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)
    
    checks = [
        check_robots_txt,
        check_htaccess,
        check_html_meta,
        check_security_md
    ]
    
    passed = 0
    total = len(checks)
    
    for check in checks:
        if check():
            passed += 1
        print()
    
    print("=" * 60)
    print(f"Security Check Results: {passed}/{total} checks passed")
    
    if passed == total:
        print("🎉 All security measures are properly implemented!")
        return 0
    else:
        print("⚠️  Some security measures need attention!")
        return 1

if __name__ == "__main__":
    sys.exit(main())