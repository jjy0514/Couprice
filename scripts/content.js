// Log a message to confirm the content script is running
console.log("Content script loaded!");

// Listen for messages from the background script or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received in content script:", message);

    if (message.action === "changeColor") {
        // Change the background color based on the message
        document.body.style.backgroundColor = message.color;
        sendResponse({ status: "Background Color changed to " + message.color });
    }
});