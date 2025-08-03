// Debug version of main.js with extensive logging
const { app, BrowserWindow } = require('electron');
const path = require('path');

console.log('=== POULTRY MANAGER DEBUG START ===');
console.log('Node version:', process.version);
console.log('Electron version:', process.versions.electron);
console.log('Platform:', process.platform);
console.log('Current directory:', __dirname);
console.log('App path:', app.getAppPath());

// Simple test to create a basic window
function createDebugWindow() {
    console.log('Creating debug window...');
    
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        },
        show: true
    });

    // Load a simple HTML string first
    win.loadURL('data:text/html,<h1>Poultry Manager Debug</h1><p>If you see this, Electron is working!</p>');
    
    win.webContents.on('did-finish-load', () => {
        console.log('Debug window loaded successfully');
    });

    win.on('closed', () => {
        console.log('Debug window closed');
    });
}

app.whenReady().then(() => {
    console.log('Electron app is ready');
    createDebugWindow();
}).catch(error => {
    console.error('Error in app.whenReady:', error);
});

app.on('window-all-closed', () => {
    console.log('All windows closed');
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

console.log('=== DEBUG MAIN.JS LOADED ===');