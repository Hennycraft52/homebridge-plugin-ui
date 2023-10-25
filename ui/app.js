document.addEventListener("DOMContentLoaded", function() {
  const pluginList = document.getElementById("plugin-list");
  const createPluginForm = document.getElementById("create-plugin-form");

  // Dummy-Daten für installierte Plugins (ersetze dies durch echte Daten)
  const installedPlugins = [
    "Plugin 1",
    "Plugin 2",
  // ...

  // Plugins in die Liste einfügen
  installedPlugins.forEach(function(pluginName) {
    const listItem = document.createElement("li");
    listItem.textContent = pluginName;
    pluginList.appendChild(listItem);
  });

  // Event-Handler für das Erstellen von Plugins
  createPluginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    const pluginNameInput = document.getElementById("plugin-name");
    const newPluginName = pluginNameInput.value;

    // Hier kannst du den Code hinzufügen, um das neue Plugin zu erstellen
    // Dies könnte eine AJAX-Anfrage an den Server sein
    // Beachte, dass dies ein vereinfachtes Beispiel ist
    // und das Erstellen eines Plugins in der Praxis komplexer sein kann

    // Nachdem das Plugin erstellt wurde, füge es zur Liste hinzu
    const listItem = document.createElement("li");
    listItem.textContent = newPluginName;
    pluginList.appendChild(listItem);

    // Leere das Eingabefeld
    pluginNameInput.value = "";
  });
});
