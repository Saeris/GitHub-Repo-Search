import { Reducer } from "../../services/store"
import { actions } from "./actions"

class SearchReducer {
  initialState = {
    query: ``,
    language: ``,
    page: null
  }

  reducer = (state = this.initialState, action) => {
    switch (action.type) {
      case actions.SEARCH:
        return {
          ...state,
          query: action.query,
          language: action.language,
          page: null
        }
      case actions.PREVIOUS_PAGE:
        return { ...state, page: `before: "${action.page}"` }
      case actions.NEXT_PAGE:
        return { ...state, page: `after: "${action.page}"` }
      case actions.RESET_SEARCH:
        return this.initialState
      default:
        return state
    }
  }

  getQuery = ({ search }) => search.query

  getLanguage = ({ search }) => search.language

  getPage = ({ search }) => search.page
}

const AddedReducer = Reducer(SearchReducer)

export const { getQuery, getLanguage, getPage } = new AddedReducer()
