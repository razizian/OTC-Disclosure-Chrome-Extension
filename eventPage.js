// Define a menu object with a title, id, and context
var menu = {
    "id": "OTC Disclosure",
    "title": "OTC Disclosure",
    "contexts": ["selection"],
};

// Create the context menu using the menu object
// Context menu is the GUI that pops up when you right click something
chrome.contextMenus.create(menu);

// Add a click listener to the context menu
// Click listerner waits for the user to click something.
//  When user clickes thing being listened to, its triggerd and executres the code
chrome.contextMenus.onClicked.addListener(function(clickData){

    // Check if the clicked menu item has the "OTC Disclosure" id and if there is selected text
    if (clickData.menuItemId == "OTC Disclosure" && clickData.selectionText){
        
        // Store the selected text in a variable
        var OTCTicker = clickData.selectionText;

        // Construct a URL using the selected text and navigate to the new URL in a new tab
        var OTCurl = "https://www.otcmarkets.com/stock/" + OTCTicker.toUpperCase().trim() + "/disclosure";
        // Creates new tab and passes the OTC-url string into new URL
        chrome.tabs.create({url: OTCurl});
    }
});
