import ApolloClient from "apollo-boost"

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: async operation => {
    const token =
      (await localStorage.getItem("token")) || process.env.REACT_APP_TOKEN
    console.log(process.env.REACT_APP_TOKEN)
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
})
