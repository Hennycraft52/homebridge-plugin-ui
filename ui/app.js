// JavaScript-Code für das Webinterface
document.addEventListener("DOMContentLoaded", function() {
  // Lade die Liste der Plugins vom Server und füge sie zur Seite hinzu
  fetch("/api/plugins")
    .then(response => response.json())
    .then(data => {
      const pluginList = document.getElementById("plugin-list");
      data.plugins.forEach(plugin => {
        const listItem = document.createElement("li");
        listItem.textContent = plugin.name;
        pluginList.appendChild(listItem);
      });
    });
});
