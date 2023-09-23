import { useQuery } from '@apollo/client';
import { REVIEWS } from '../graphql/queries';

const useReviews = (repositoryId) => {
   
  const result = useQuery(REVIEWS, {
fetchPolicy: 'cache-and-network', variables:{repositoryId}
}) 

const reviews = result
  
  return { reviews };
};

export default useReviews;