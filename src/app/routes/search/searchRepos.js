import gql from "graphql-tag"

export const searchRepos = navigation => gql`
  query searchRepos($query: String!) {
    search(query: $query type: REPOSITORY first: 10 ${navigation || ``}) {
      nav: pageInfo {
        start: startCursor
        end: endCursor
        next: hasNextPage
        prev: hasPreviousPage
      }
      count: repositoryCount
      repos: nodes {
        ... on Repository {
          title: nameWithOwner
          url
          description
          updated: updatedAt
          language: primaryLanguage {
            color
            name
          }
          topics: repositoryTopics(first: 4) {
            nodes {
              topic {
                name
              }
            }
          }
          license: licenseInfo {
            code: spdxId
          }
          issues(labels: ["help wanted"], states: OPEN) {
            count: totalCount
          }
          stars: stargazers {
            count: totalCount
          }
        }
      }
    }
  }
`
