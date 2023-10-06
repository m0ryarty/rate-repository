import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useMe = (Reviews) => {

  const includeReviews = Reviews ? true : false

  const { loading, error, data, refetch } = useQuery(ME, {
    fetchPolicy: 'cache-and-network', variables: { includeReviews: includeReviews }
  })
  
  return { loading, error, data, refetch }
}

export default useMe