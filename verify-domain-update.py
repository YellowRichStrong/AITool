#!/usr/bin/env python3

"""
Verification Script for Domain Update
Checks that all references to the old domain have been updated to ballstar.cc
"""

import os
import re

def check_domain_references():
    """Check all files for references to the old domain"""
    web_dir = os.path.dirname(os.path.abspath(__file__))
    old_domain = r"yoursite\.com"
    new_domain = "ballstar.cc"
    
    # Files to check
    files_to_check = [
        "index.html",
        "contact.html",
        "privacy.html",
        "terms.html",
        "robots.txt",
        "sitemap.xml",
        "script.js",
        "update-sitemap.py",
        "update-sitemap.sh"
    ]
    
    issues_found = []
    
    print("Checking domain references...")
    
    for filename in files_to_check:
        filepath = os.path.join(web_dir, filename)
        if os.path.exists(filepath):
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
                # Check for old domain references
                if re.search(old_domain, content):
                    issues_found.append(f"Old domain reference found in {filename}")
                
                # Check for new domain references
                if new_domain in content:
                    print(f"✓ {filename} contains new domain")
                else:
                    # Some files might not need the domain reference
                    if filename not in ["styles.css", "script.js.backup"]:
                        print(f"? {filename} does not contain new domain (may be OK)")
    
    # Check that sitemap contains the new domain
    sitemap_path = os.path.join(web_dir, "sitemap.xml")
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            content = f.read()
            if "ballstar.cc" in content:
                print("✓ Sitemap contains new domain")
            else:
                issues_found.append("Sitemap does not contain new domain")
    
    # Check that robots.txt contains the new domain
    robots_path = os.path.join(web_dir, "robots.txt")
    if os.path.exists(robots_path):
        with open(robots_path, 'r', encoding='utf-8') as f:
            content = f.read()
            if "ballstar.cc" in content:
                print("✓ Robots.txt contains new domain")
            else:
                issues_found.append("Robots.txt does not contain new domain")
    
    # Report results
    if issues_found:
        print("\n❌ Issues found:")
        for issue in issues_found:
            print(f"  - {issue}")
        return False
    else:
        print("\n✅ All checks passed! Domain update completed successfully.")
        return True

if __name__ == "__main__":
    check_domain_references()