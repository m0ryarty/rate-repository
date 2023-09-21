import { gql } from '@apollo/client'

export const ALL_REPOSITORIES = gql`
query Repositories {
  repositories {
    edges {
      node {
        id
        name
        ownerName
        createdAt
        fullName
        reviewCount
        ratingAverage
        forksCount
        stargazersCount
        description
        language
        ownerAvatarUrl
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