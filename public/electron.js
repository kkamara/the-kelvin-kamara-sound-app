const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');

const inProduction = app.isPackaged;
const appReferrer = 'https://github.com/kkamara/the-kelvin-kamara-sound-app';

let mainWindow;

function configureYoutubeReferrer() {
    electron.session.defaultSession.webRequest.onBeforeSendHeaders(
        { urls: ['*://*.youtube.com/*', '*://*.youtube-nocookie.com/*'] },
        (details, callback) => {
            const referrerHeader = Object.keys(details.requestHeaders).find(
                (header) => header.toLowerCase() === 'referer'
            );
            const referrer = referrerHeader && details.requestHeaders[referrerHeader];

            if (!referrer || referrer.startsWith('file:')) {
                if (referrerHeader) {
                    delete details.requestHeaders[referrerHeader];
                }
                details.requestHeaders.Referer = appReferrer;
            }

            callback({ requestHeaders: details.requestHeaders });
        }
    );
}

function createWindow() {
    mainWindow = new BrowserWindow({
      width: 900, 
      height: 680,
      webPreferences: {
        devTools: inProduction ? false : true,
      },
    })

    if (inProduction) {
        mainWindow.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
    } else {
        mainWindow.loadURL('http://localhost:3000');
    }

    mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', () => {
    if (inProduction) {
        configureYoutubeReferrer();
    }
    createWindow();
});

process.on("uncaughtException", err => {
    if (false === inProduction) {
        console.log(err);
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
