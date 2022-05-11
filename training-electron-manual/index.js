const {app, BrowserWindow} = require("electron")
const path = require('path')



const createWindow = () =>{
  const window = new BrowserWindow({
    width: 800,
    height: 600
  })

  // window.loadFile("./index.html")
  window.loadURL("https://github.com/TinTinWinata")
  // window.loadFile(path.join(__dirname, './index.html'))
  // window.webContents.openDevTools()
}

app.whenReady().then(() => {createWindow()})