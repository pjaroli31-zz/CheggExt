
window.onload = function(){function injectTheScript() {
	
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
       
        console.log(tabs[0]);
        chrome.tabs.executeScript(tabs[0].id, {file: "action.js"});
    });
}

injectTheScript();
};