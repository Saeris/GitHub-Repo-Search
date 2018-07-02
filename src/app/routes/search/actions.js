export const actions = {
  SEARCH: `SEARCH`,
  PREVIOUS_PAGE: `PREVIOUS_PAGE`,
  NEXT_PAGE: `NEXT_PAGE`,
  RESET_SEARCH: `RESET_SEARCH`
}

export const search = (query, language) => ({
  type: actions.SEARCH,
  query,
  language
})

export const previousPage = page => ({
  type: actions.PREVIOUS_PAGE,
  page
})

export const nextPage = page => ({
  type: actions.NEXT_PAGE,
  page
})

export const resetSearch = () => ({ type: actions.RESET_SEARCH })
