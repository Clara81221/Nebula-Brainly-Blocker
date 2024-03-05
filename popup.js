// popup.js
document.getElementById('deleteButton').addEventListener('click', () => {
    // Execute the content script to delete specific value from local storage
    browser.tabs.executeScript({file: "content.js"});
  });
  