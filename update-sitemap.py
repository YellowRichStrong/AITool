#!/usr/bin/env python3

"""
Sitemap Generator Script
Automatically generates and updates sitemap.xml for the website
"""

import os
import glob
from datetime import datetime
import xml.etree.ElementTree as ET

# Configuration
CONFIG = {
    'site_url': 'https://ballstar.cc',
    'root_dir': os.path.dirname(os.path.abspath(__file__)),
    'sitemap_file': os.path.join(os.path.dirname(os.path.abspath(__file__)), 'sitemap.xml'),
    'exclude_patterns': [
        'test-*',
        'debug-*',
        'login-test.html',
        'click-test.html',
        'sitemap.xml',
        'robots.txt',
        '*.md',
        '*.json',
        '*.toml',
        '*.css',
        '*.js',
        '.*'
    ],
    'page_priorities': {
        'index.html': 1.0,
        'contact.html': 0.8,
        'privacy.html': 0.5,
        'terms.html': 0.5
    },
    'change_frequencies': {
        'index.html': 'weekly',
        'contact.html': 'monthly',
        'privacy.html': 'monthly',
        'terms.html': 'monthly'
    }
}

def is_excluded(filename):
    """Check if a file should be excluded from sitemap"""
    import fnmatch
    
    for pattern in CONFIG['exclude_patterns']:
        if fnmatch.fnmatch(filename, pattern):
            return True
    return False

def get_file_mod_time(filepath):
    """Get file modification time"""
    try:
        mod_time = os.path.getmtime(filepath)
        return datetime.fromtimestamp(mod_time).strftime('%Y-%m-%d')
    except Exception:
        # If we can't get the file time, use today's date
        return datetime.now().strftime('%Y-%m-%d')

def scan_html_files(directory):
    """Scan directory for HTML files"""
    html_files = []
    
    try:
        for item in os.listdir(directory):
            # Skip excluded files
            if is_excluded(item):
                continue
                
            full_path = os.path.join(directory, item)
            
            if os.path.isfile(full_path) and item.endswith('.html'):
                html_files.append(item)
    except Exception as e:
        print(f"Error scanning directory: {e}")
    
    return html_files

def generate_sitemap_xml(html_files):
    """Generate sitemap XML content"""
    # Create the root element
    urlset = ET.Element('urlset')
    urlset.set('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
    urlset.set('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
    urlset.set('xsi:schemaLocation', 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd')
    
    # Add each HTML file to the sitemap
    for file in html_files:
        file_path = os.path.join(CONFIG['root_dir'], file)
        last_mod = get_file_mod_time(file_path)
        priority = CONFIG['page_priorities'].get(file, 0.5)
        changefreq = CONFIG['change_frequencies'].get(file, 'monthly')
        
        # Create url element
        url = ET.SubElement(urlset, 'url')
        
        # Add loc element
        loc = ET.SubElement(url, 'loc')
        loc.text = f"{CONFIG['site_url']}/{file}"
        
        # Add lastmod element
        lastmod = ET.SubElement(url, 'lastmod')
        lastmod.text = last_mod
        
        # Add changefreq element
        changefreq_elem = ET.SubElement(url, 'changefreq')
        changefreq_elem.text = changefreq
        
        # Add priority element
        priority_elem = ET.SubElement(url, 'priority')
        priority_elem.text = f"{priority:.1f}"
    
    # Convert to string
    ET.indent(urlset, space="  ", level=0)  # Pretty print (Python 3.9+)
    xml_str = ET.tostring(urlset, encoding='unicode')
    
    return f'<?xml version="1.0" encoding="UTF-8"?>\n{xml_str}'

def update_sitemap_file(xml_content):
    """Update sitemap file"""
    try:
        with open(CONFIG['sitemap_file'], 'w', encoding='utf-8') as f:
            f.write(xml_content)
        print(f"✅ Sitemap successfully updated at: {CONFIG['sitemap_file']}")
        print(f"📝 {datetime.now().strftime('%Y-%m-%d %H:%M:%S')} - Sitemap updated with latest changes")
        return True
    except Exception as e:
        print(f"❌ Error writing sitemap file: {e}")
        return False

def main():
    """Main function"""
    print("🚀 Starting sitemap generation...")
    
    # Scan for HTML files
    html_files = scan_html_files(CONFIG['root_dir'])
    
    if not html_files:
        print("⚠️  No HTML files found to include in sitemap")
        return False
    
    print(f"🔍 Found {len(html_files)} HTML files:")
    for file in html_files:
        print(f"   - {file}")
    
    # Generate sitemap XML
    xml_content = generate_sitemap_xml(html_files)
    
    # Update sitemap file
    success = update_sitemap_file(xml_content)
    
    if success:
        print("✅ Sitemap generation completed!")
    else:
        print("❌ Sitemap generation failed!")
    
    return success

if __name__ == "__main__":
    main()