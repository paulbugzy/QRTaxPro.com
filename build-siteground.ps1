# Build the project
npm run build

# Create deployment directory if it doesn't exist
if (-not (Test-Path deploy)) {
    New-Item -ItemType Directory -Path deploy
}

# Copy only the necessary files to deploy folder
Copy-Item -Path "dist\*" -Destination "deploy" -Recurse -Force
Copy-Item -Path "public\.htaccess" -Destination "deploy\.htaccess" -Force

Write-Host "Build completed. Files are ready in the 'deploy' folder."
Write-Host "Upload the contents of the 'deploy' folder to your SiteGround public_html directory"