import { createTaskBoard } from "./src/index.js";
import { Buffer } from './node_modules/buffer';

// get all issues from Jira, ensure cors is enabled
async function getTasksFromJira() {
    const response = await fetch('https://james-ritza.atlassian.net/rest/api/2/search?jql=project=JDW', {  
    // allow localhost to access the api through cors
    mode: 'cors',
    // set the request method to GET
    method: 'GET',
    // set the request headers
    headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
            'Authorization': `Basic ${Buffer.from(
                            'james@ritza.co:1oRtOE1WE6ADLMnLU9ADADFD'
                          ).toString('base64')}`,
    },
    });
    const issues = await response.json();
    createTaskBoard(issues);
}


export { getTasksFromJira };



// export { createTaskBoard };

