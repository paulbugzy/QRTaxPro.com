# Build the project
npm run build

# Create deployment directory
if (-not (Test-Path deploy)) {
    New-Item -ItemType Directory -Path deploy
}

# Copy dist contents to deploy folder
Copy-Item -Path "dist\*" -Destination "deploy" -Recurse -Force

Write-Host "Build completed. Upload the contents of the 'deploy' folder to your SiteGround public_html directory"