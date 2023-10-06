import { gql } from '@apollo/client'

export const ALL_REPOSITORIES = gql`
query Query($first:Int, $after: String, $orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String) {
  repositories(first: $first, after:$after orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword) {
    totalCount
    edges {
      node {
        id
        fullName
        createdAt
        description
        language
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
        ownerAvatarUrl
      }
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
  }
}
`

export const ME = gql`
query Query($first: Int, $after: String, $includeReviews: Boolean! = false) {
  me {
    username
    id
    reviews(
      first: $first,
      after: $after
      )
      @include(if: $includeReviews) {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          rating
          text
          repository {
            fullName
            createdAt
          }
        }
      }
    }
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
  query Query($repositoryId: ID!, $first: Int, $after: String) {
  repository(id: $repositoryId) {
    fullName
    id
    reviews(first: $first, after: $after) {
      totalCount
      edges {
        node {
          createdAt
          id
          rating
          text
          user {
            username
            id
          }
          repositoryId
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
    }
  }
}
`

