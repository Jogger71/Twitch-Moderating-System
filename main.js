const electron = require('electron');
const url = require('url');
const path = require('path');


const {app, BrowserWindow, Menu} = electron;

//  Create our window variables
let chatsWindow;
let videosWindow;
let configWindow;

/**
 * Creates our windows
 */
function createWindow() {
  //  Setup the chats window
  chatsWindow = new BrowserWindow({});
  chatsWindow.toggleDevTools();
  chatsWindow.loadURL(fileUrl('chatsWindow.html'));
  videosWindow = new BrowserWindow({});
  videosWindow.toggleDevTools();
  videosWindow.loadURL(fileUrl('videosWindow.html'));

  //  Close application when either of the two windows are closed
  chatsWindow.on('closed', closeApplication);
  videosWindow.on('closed', closeApplication);

  // const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Menu.setApplicationMenu(mainMenu);
}

function fileUrl(filename, currentDirectory = true, directory = '') {
  let directoryPath;
  if (currentDirectory) {
    directoryPath = __dirname;
  } else {
    directoryPath = directory;
  }

  return url.format({
    pathname: path.join(directoryPath, filename),
    protocol: 'file:',
    slashes: true
  });
}

function closeApplication() {
  app.quit();
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.disableHardwareAcceleration();

const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        accelerator: (process.platform === 'darwin') ? 'Command+Q':'Ctrl+Q',
        click() {
          app.quit();
        }
      }
    ]
  }
];