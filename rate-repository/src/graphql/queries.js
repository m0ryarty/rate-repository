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

export const REPOSITORY = gql`
query Repositories($repositoryId: ID!) {
  repository(id: $repositoryId) {
     url
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    language
    description
    fullName
    ownerAvatarUrl
  }
}
`

export const REVIEWS = gql`
  query Query($repositoryId: ID!) {
  repository(id: $repositoryId) {
    reviews {
      edges {
        node {
          createdAt
          user {
            createdAt
            username
          }
          rating
          text
        }
      }
    }
  }
}
`