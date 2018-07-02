# GitHub Repository Search Example

1. First install the project dependencies with either `yarn` or `npm install`.
2. Next, set your GitHub API Personal Access Token by opening `.env` and adding it to the end of the line: `REACT_APP_GITHUB_TOKEN=`
3. Then you should be able to run `yarn start` or `npm start`, which will build the front-end and launch the app in your default browser.

Once that's running, any changes to the code will cause the client to recompile and restart. The client should automatically refresh the page on updates.

By default the client can be accessed at: `http://localhost:3080/`

# FAQ:

> Q: I'm getting a "Network error: Response not successful: Recieved Status code 401", what did I do wrong?

You're likely forgetting to add your GitHub Personal Access Token! To fix this, either set it in the `.env` file in the root of the project on the line `REACT_APP_GITHUB_TOKEN=` or in your browser with the page open, go to local storage (application tab in Chrome) and create a new key `token` and set it's value with your access token there and refresh the page.

> Q: What scopes do I need when generating my Personal Access Token?

Follow this guide from GitHub's GraphQL API documentation:

https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql