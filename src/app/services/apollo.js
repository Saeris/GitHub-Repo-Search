import ApolloClient from "apollo-boost"

// GitHub API Explorer
// https://developer.github.com/v4/explorer/

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: async operation => {
    const token =
      (await localStorage.getItem("token")) ||
      process.env.REACT_APP_GITHUB_TOKEN
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
})
