import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import { connectRouter, routerMiddleware } from "connected-react-router"
import createHistory from "history/createBrowserHistory"

class Store {
  constructor() {
    this.history = createHistory()
    this.state = this.configureStore()
    this.state.dispatch({ type: `INIT_STATE` })
  }

  composeEnhancers =
    //window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose

  initialState = {}
  asyncReducers = {}

  rootReducer = (state = this.initialState) => state

  configureStore() {
    const loggerMiddleware = createLogger()
    return createStore(
      connectRouter(this.history)(this.rootReducer),
      this.initialState,
      this.composeEnhancers(
        applyMiddleware(
          routerMiddleware(this.history)
          //loggerMiddleware
        )
      )
    )
  }

  addReducer(name, reducer) {
    this.asyncReducers = { ...this.asyncReducers, [name]: reducer }
    this.state.replaceReducer(
      connectRouter(this.history)(
        combineReducers({ ...this.rootReducer, ...this.asyncReducers })
      )
    )
  }
}

export const store = new Store()

export const Reducer = Class =>
  class extends Class {
    constructor(...args) {
      super(...args)
      this.addToStore()
    }

    addToStore = () => {
      const name = super.constructor.name.replace(`Reducer`, ``).toLowerCase()
      console.log(`adding reducer ${name} to store`)
      store.addReducer(name, this.reducer)
    }
  }
