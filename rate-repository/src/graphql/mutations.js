import { gql } from '@apollo/client'

export const SIGN_IN = gql`
    mutation authenticate($username: String!, $password: String!){
       authenticate(credentials: { username: $username, password: $password }) {
    accessToken
  } 
    }
`

export const SIGN_UP = gql`
    mutation Mutation($username: String!, $password: String!) {
  createUser(user: { username: $username, password: $password} ) {
    id
    reviewCount
    username
  }
}
`

export const CREATE_REVIEW = gql`
mutation Mutation(
  $ownerName: String!,
  $rating: Int!,
  $repositoryName: String!,
  $text: String) {
  createReview(review: {
    ownerName : $ownerName,
    rating: $rating,
    repositoryName: $repositoryName,
    text: $text  
}) {
    repository {
      ownerName
      name
    }
    rating
    text
    id
  }
}
`

export const DELETE_REVIEW = gql`
mutation Mutation($deleteReviewId: ID!) {
  deleteReview(id: $deleteReviewId)
}
`


