function browserHistory(browser, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
        let action = tokens.shift();
        let website;
        
        if (tokens.length > 1) {
            website = tokens.join(' ');
        } else {
            website = tokens.shift();
        }

        if (action == 'Open') {
            browser['Open Tabs'].push(website);
            browser['Browser Logs'].push(command);
        } else if (action == 'Close') {
            if (browser['Open Tabs'].includes(website)) {
                let idx = browser['Open Tabs'].indexOf(website);
                browser['Open Tabs'].splice(idx, 1);
                browser['Recently Closed'].push(website);
                browser['Browser Logs'].push(command);
            }
        } else if (action == 'Clear') {
            browser['Open Tabs'] = [];
            browser['Recently Closed'] = [];
            browser['Browser Logs'] = [];
        }
    }

    let browserKVPs = Object.entries(browser);
    let browserName = browserKVPs[0][1];
    console.log(browserName);

    for (let i = 1; i < browserKVPs.length; i++) {
        let [section, tabs] = browserKVPs[i];
        console.log(`${section}: ${tabs.join(', ')}`);
    }
}

browserHistory(
    {"Browser Name":"Google Chrome",
    "Open Tabs":["Facebook","YouTube","Google Translate"],
    "Recently Closed":["Yahoo","Gmail"],
    "Browser Logs":["Open YouTube",
                    "Open Yahoo",
                    "Open Google Translate",
                    "Close Yahoo",
                    "Open Gmail",
                    "Close Gmail",
                    "Open Facebook"]},

    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);

// browserHistory(
//     {"Browser Name":"Mozilla Firefox",
//     "Open Tabs":["YouTube"],
//     "Recently Closed":["Gmail","Dropbox"],
//     "Browser Logs":["Open Gmail",
//                     "Close Gmail", 
//                     "Open Dropbox",
//                     "Open YouTube", 
//                     "Close Dropbox"]},

//     ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
// );