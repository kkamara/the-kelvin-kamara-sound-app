const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const path = require('path');

const inProduction = app.isPackaged;
const appName = 'The Kelvin Kamara Sound App';

let mainWindow;
let maximizeMenuItem;

function createApplicationMenu() {
  const maximizeMenuItemTemplate = {
    label: 'Maximize',
    click: () => {
      if (!mainWindow || mainWindow.isDestroyed()) return;

      if (mainWindow.isMaximized()) {
        mainWindow.unmaximize();
      } else {
        mainWindow.maximize();
      }
    },
  };

  const menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [{
        label: 'darwin' === process.platform ?
          'Quit' :
          'Exit',
        role: 'quit',
      }],
    },
    {
      label: 'Window',
      submenu: [
        { label: 'Minimize', role: 'minimize' },
        maximizeMenuItemTemplate,
        { type: 'separator' },
        { label: 'Close', role: 'close' },
      ],
    },
  ]);

  maximizeMenuItem = menu.items[1].submenu.items[1];
  Menu.setApplicationMenu(menu);
}

function updateMaximizeMenuItem() {
  if (maximizeMenuItem) {
    maximizeMenuItem.label = mainWindow &&
      mainWindow.isMaximized() ? 'Restore' : 'Maximize';
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    title: appName,
    webPreferences: {
      devTools: inProduction ? false : true,
    },
  })

  if (inProduction) {
    mainWindow.loadURL(
      `file://${path.join(__dirname, '../build/index.html')}`
    );
  } else {
    mainWindow.loadURL('http://localhost:3000');
  }

  mainWindow.on('maximize', updateMaximizeMenuItem);
  mainWindow.on('unmaximize', updateMaximizeMenuItem);
  mainWindow.maximize();
  updateMaximizeMenuItem();
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', () => {
  app.setName(appName);
  createApplicationMenu();
  createWindow();
});

process.on("uncaughtException", err => {
  if (false === inProduction) {
    console.log(err);
  }
});

app.on('window-all-closed', () => {
  if ('darwin' !== process.platform) {
    app.quit();
  }
});

app.on('activate', () => {
  if (null === mainWindow) {
    createWindow();
  }
});
