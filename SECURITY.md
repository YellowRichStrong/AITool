# Ballstar Website Security Policy

## Anti-Crawling Measures

1. **robots.txt Configuration**:
   - Added crawl delay of 10 seconds
   - Disallowed access to image directories
   - Blocked known aggressive crawlers (MJ12bot, AhrefsBot, SemrushBot)

2. **Server-side Protection**:
   - Implemented .htaccess rules to prevent image hotlinking
   - Restricted direct access to image files from external domains

3. **Client-side Protection**:
   - Added JavaScript referrer checking
   - Implemented same-origin policy for images

## Anti-Hotlinking Measures

1. **.htaccess Rules**:
   - Only allow image access from nba110.com domain
   - Block direct image access from external sites
   - Return 403 Forbidden for unauthorized access attempts

2. **HTML Meta Tags**:
   - Added referrer policy to prevent leaking referrer information
   - Set same-origin policy for all resources

3. **JavaScript Validation**:
   - Check document referrer on page load
   - Redirect unauthorized access to homepage

## Image Protection

1. **Directory Restriction**:
   - Disallowed access to /iphone/ directory in robots.txt
   - Protected image directories with .htaccess rules

2. **Access Control**:
   - Only allow image loading from same domain
   - Block external embedding of images

## Monitoring and Maintenance

1. **Regular Updates**:
   - Update security rules as needed
   - Monitor access logs for suspicious activity

2. **Performance Considerations**:
   - Crawl delay prevents server overload
   - Efficient .htaccess rules minimize performance impact

## Contact

For security concerns or questions, please contact: tankeapp@gmail.com