// Listener for when the extension is installed or updated
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    console.log("Extension installed for the first time!");
  } else if (details.reason === "update") {
    console.log("Extension updated to a new version!");
  }
});
  
  // Listener for browser action (e.g., clicking the extension icon)
  chrome.action.onClicked.addListener((tab) => {
    console.log("Extension icon clicked!");
    chrome.tabs.create({ url: "https://www.example.com" }); // Example action: Open a new tab
  });
  
  // Example of using storage API
  chrome.storage.sync.set({ key: "value" }, () => {
    console.log("Value is set in storage.");
  });
  
  chrome.storage.sync.get(["key"], (result) => {
    console.log("Value retrieved from storage:", result.key);
  });