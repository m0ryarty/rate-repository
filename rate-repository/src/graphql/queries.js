import { gql } from '@apollo/client'

export const ALL_REPOSITORIES = gql`
query Repositories {
  repositories {
    edges {
      node {
        ownerAvatarUrl
        name
        description
        language
        stargazersCount
        reviewCount
        forksCount
        ratingAverage
        ownerName
      }
    }
  }
}
`

export const ME = gql`
query Query {
  me {
    id
    username
  }
}
`