// Background script
chrome.runtime.onInstalled.addListener((() => {
    chrome.contextMenus.create({
        title: "Definition",
        id: "contextMenu1",
        contexts: ["page", "selection"]
    });

    chrome.contextMenus.create({
        title: "Synonym",
        id: "contextMenu2",
        contexts: ["page", "selection"]
    });

}));

chrome.contextMenus.onClicked.addListener(((info, tab) => {
    if (info.menuItemId === "contextMenu1" && info.selectionText) {
        chrome.tabs.create({
            url: `https://www.merriam-webster.com/dictionary/${info.selectionText}`
        });
    } else if (info.menuItemId === "contextMenu2" && info.selectionText) {
        chrome.tabs.create({
            url: `https://www.merriam-webster.com/thesaurus/${info.selectionText}`
        })
    }

}));