#!/bin/bash

# Make deploy script executable
chmod +x deploy-siteground.sh

# Install dependencies
npm install

# Build and optimize the project
./deploy-siteground.sh

# Create robots.txt
cat > dist/robots.txt << EOL
User-agent: *
Allow: /
Sitemap: https://narssoplumbing.com/sitemap.xml
EOL

# Create sitemap.xml
cat > dist/sitemap.xml << EOL
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://narssoplumbing.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://narssoplumbing.com/services</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://narssoplumbing.com/areas</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://narssoplumbing.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
EOL