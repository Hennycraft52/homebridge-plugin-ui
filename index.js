const homebridge = require("homebridge");
const express = require("express");
const app = express();

const fs = require("fs").promises;
const path = require("path");

const MyPlugin = require("./plugins/my-custom-plugin.js");

module.exports = (api) => {
  const Service = api.hap.Service;
  const Characteristic = api.hap.Characteristic;

  api.registerPlatform("MyPlugin", "MyPlatform", MyPlatform);
};

class MyPlatform {
  constructor(log, config, api) {
    this.log = log;
    this.config = config;
    this.api = api;

    this.log("MyPlugin is initializing...");

    // Start the web server
    this.startWebServer();
  }

  async startWebServer() {
    const port = this.config.webPort || 3000;
    const uiDirectory = path.join(__dirname, "ui");
    app.use(express.static(uiDirectory));

    // API-Endpunkt, um die Liste der Plugins abzurufen
    app.get("/api/plugins", async (req, res) => {
      const plugins = await this.getInstalledPlugins();
      res.json({ plugins });
    });

    app.listen(port, () => {
      this.log(`Web server started on port ${port}`);
    });
  }

  async getInstalledPlugins() {
    const pluginsDir = path.join(__dirname, "plugins");
    const pluginFolders = await fs.readdir(pluginsDir);
    return pluginFolders.map(folder => ({ name: folder }));
  }
}
