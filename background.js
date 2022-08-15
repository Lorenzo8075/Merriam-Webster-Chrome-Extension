chrome.runtime.onInstalled.addListener((details) => {
    chrome.contextMenus.create({
        title: "MW Word Checker",
        id: "contextMenu1",
        contexts: ["page", "selection"]
    })
    chrome.contextMenus.create({
        title: "Read Text",
        id: "contextMenu2",
        contexts: ["page", "selection"]
    })
})


chrome.contextMenus.onClicked.addListener((event) => {
    // console.log(event)
    //Search the highlighted text
    // chrome.search.query({
    //     disposition: "NEW_TAB",
    //     text: `synonym ${event.selectionText}`, //`
    // })
    if (event.menuItemId === "contextMenu1") {
        chrome.tabs.create({
            url: `https://www.merriam-webster.com/dictionary/${event.selectionText}`
        })
    } else if (event.menuItemId === "contextMenu2") {
        chrome.tts.speak(event.selectionText, { 'rate': 1.3 })
    }
})




//Shows child menus for parent menu
// chrome.contextMenus.create({
//     title: "Test Context Menu 1",
//     id: "contextMenu2",
//     parentId: "contextMenu1",
//     contexts: ["page", "selection"]
// })
// chrome.contextMenus.create({
//     title: "Test Context Menu 2",
//     id: "contextMenu3",
//     parentId: "contextMenu1",
//     contexts: ["page", "selection"]
// })