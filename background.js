// background.js
browser.webNavigation.onDOMContentLoaded.addListener(details => {
    // Check if the user has navigated to the specific website
    if (details.url.includes("brainly.com")) {
      // Execute the content script to delete specific value from local storage
      browser.tabs.executeScript({ file: "content.js" });
    }
  });