// Log a message to confirm the popup script is running
console.log("Popup script loaded!");

// Function to generate a random color in hex format
function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, "0")}`;
}

// Add an event listener to a button in the popup
document.addEventListener("DOMContentLoaded", () => {
    const changeColorButton = document.getElementById("changeColorButton");
    const openPageButton = document.getElementById("openPageButton");

    // Event listener for the CHANGE button
    if (changeColorButton) {
        changeColorButton.addEventListener("click", () => {
            // Generate a random color
            const randomColor = getRandomColor();

            // Send a message to the custom.html page to change its background color
            chrome.tabs.query({}, (tabs) => {
                tabs.forEach((tab) => {
                    if (tab.url) {
                        chrome.tabs.sendMessage(tab.id, { action: "changeColor", color: randomColor }, (response) => {
                            console.log(response?.status || "No response from custom page.");
                        });
                    }
                    else {
                        console.log("No custom page found.");
                    }
                });
            });
        });
    }

    // Event listener for the OPEN button
    if (openPageButton) {
        openPageButton.addEventListener("click", () => {
            console.log("Open Page button clicked!");

            // Open a new tab with a custom page
            chrome.tabs.create({ url: chrome.runtime.getURL("src/extension/custom.html") });
        });
    }
});