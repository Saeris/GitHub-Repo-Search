import React from "react"
import { ApolloProvider } from "react-apollo"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { client, store } from "../services"
import { Directory } from "./directory"
import routes from "./routes"

export const Root = () => (
  <ApolloProvider client={client}>
    <Provider store={store.state}>
      <ConnectedRouter history={store.history}>
        <Directory paths={routes} />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>
)
