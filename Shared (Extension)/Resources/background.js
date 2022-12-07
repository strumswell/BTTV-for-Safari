browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Store action for settings change
    if (request.type === "SetStoreExecution") {
        browser.storage.local.set({[request.id]: request.value}).then(res => {
            sendResponse({ result: {[request.id]: request.value} })
        })
    // Retrieve action for settings change
    } else if (request.type === "GetStoreExecution"){
        browser.storage.local.get(request.id).then((res) => {
            sendResponse({ checked: res[request.id] })
        })
    }
    return true;
});
