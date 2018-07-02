import React from "react"
import { Query } from "react-apollo"
import { connect } from "react-redux"
import { Field, Control, Button } from "bloomer"
import { GoStar } from "react-icons/lib/go"
import distanceInWordsToNow from "date-fns/distance_in_words_to_now"
import numeral from "numeral"
import { List, Loading, OnError } from "../../components/structural"
import { Results, RepoCount, repo, Tag, RepoTitle, Language } from "./elements"
import { previousPage, nextPage } from "./actions"
import { getQuery, getLanguage, getPage } from "./reducer"
import { searchRepos } from "./searchRepos"

const mapStateToProps = (state, ownProps) => ({
  query: () => getQuery(state),
  language: () => getLanguage(state),
  page: () => getPage(state),
  ...ownProps
})

const mapDispatchToProps = dispatch => ({
  previousPage: page => dispatch(previousPage(page)),
  nextPage: page => dispatch(nextPage(page))
})

const Element = ({ query, language, page, nextPage, previousPage }) => (
  <Query
    query={searchRepos(page())}
    variables={{
      query: `${query()}${language()}` || `language:`
    }}
  >
    {({ loading, error, data, fetchMore }) => {
      if (loading) return <Loading />
      if (error) return <OnError errMsg={error} />
      const { search: { nav, count, repos } } = data
      return (
        <Results>
          <RepoCount>
            {numeral(count).format(`0,0`)} repository results
          </RepoCount>
          <List>
            {({ ListContainer, ListItem }) => (
              <ListContainer>
                {repos.map(
                  (
                    {
                      title,
                      url,
                      description,
                      topics,
                      license,
                      updated,
                      issues,
                      language,
                      stars
                    },
                    i
                  ) => (
                    <ListItem key={i} className={repo}>
                      <div>
                        <RepoTitle href={url}>{title}</RepoTitle>
                        <p>{description}</p>
                        {topics.nodes.length > 0 && (
                          <ul>
                            {topics.nodes.map(({ topic }, i) => (
                              <Tag key={i}>{topic.name}</Tag>
                            ))}
                          </ul>
                        )}
                        <span>
                          {license &&
                            license.code && <p>{`${license.code} license`}</p>}
                          <p>
                            {`Updated ${distanceInWordsToNow(updated)} ago`}
                          </p>
                          {issues.count > 0 && (
                            <p>{`${numeral(issues.count).format(
                              `0.[0]a`
                            )} issues need help`}</p>
                          )}
                        </span>
                      </div>
                      <div>
                        {language && (
                          <span>
                            <Language color={language.color} />
                            <p>{`${language.name}`}</p>
                          </span>
                        )}
                      </div>
                      <div>
                        <span>
                          <GoStar />
                          <p>{`${numeral(stars.count).format(`0.[0]a`)}`}</p>
                        </span>
                      </div>
                    </ListItem>
                  )
                )}
              </ListContainer>
            )}
          </List>
          {count > 10 && (
            <Field isHorizontal hasAddons="centered">
              <Control>
                <Button
                  disabled={!nav.prev}
                  onClick={e => {
                    e.preventDefault()
                    previousPage(nav.start)
                  }}
                  isColor="info"
                  isOutlined
                >
                  Prev
                </Button>
              </Control>
              <Control>
                <Button
                  disabled={!nav.next}
                  onClick={e => {
                    e.preventDefault()
                    nextPage(nav.end)
                  }}
                  isColor="info"
                  isOutlined
                >
                  Next
                </Button>
              </Control>
            </Field>
          )}
        </Results>
      )
    }}
  </Query>
)

export const SearchResults = connect(mapStateToProps, mapDispatchToProps)(
  Element
)
