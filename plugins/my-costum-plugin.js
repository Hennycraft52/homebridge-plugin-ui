module.exports = (api) => {
  const Service = api.hap.Service;
  const Characteristic = api.hap.Characteristic;

  const MyCustomAccessory = class extends api.platformAccessory {
    constructor(log, config, api) {
      super(log, config, api);

      this.name = config.name || "My Custom Accessory";

      this.service = this.getService(Service.Switch) || this.addService(Service.Switch, this.name);
    }

    getServices() {
      return [this.service];
    }
  };

  api.registerPlatformAccessories("MyPlugin", "MyPlatform", [new MyCustomAccessory()]);
};
