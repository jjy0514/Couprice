// Log a message to confirm the custom script is running
console.log("Custom page script loaded!");

// Add event listeners for the color picker and apply button
document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("colorPicker");
    const applyColorButton = document.getElementById("applyColorButton");

    if (applyColorButton) {
        applyColorButton.addEventListener("click", () => {
            const selectedColor = colorPicker.value;
            document.body.style.backgroundColor = selectedColor;
            console.log(`Background color changed to: ${selectedColor}`);
        });
    }
});

// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received in custom.js:", message);

    if (message.action === "changeColor") {
        // Change the background color based on the message
        document.body.style.backgroundColor = message.color;
        sendResponse({ status: "Custom page background color changed to " + message.color });
    }
});