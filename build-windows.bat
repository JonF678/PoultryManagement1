@echo off
echo Building Poultry Manager for Windows...
echo ========================================

echo Checking dependencies...
if not exist "node_modules\electron" (
    echo Installing Electron dependencies...
    npm install --save-dev electron@^37.2.5 electron-builder@^26.0.12
)

echo Building Windows installer...
npx electron-builder --win --config electron-builder.json

if %errorlevel% equ 0 (
    echo.
    echo ✅ Build successful!
    echo Check the dist\ folder for your installer
    echo.
    echo Files created:
    dir dist\*.exe 2>nul
    echo.
    echo Your Poultry Manager desktop app is ready for installation!
) else (
    echo.
    echo ❌ Build failed. Check the error messages above.
)

pause