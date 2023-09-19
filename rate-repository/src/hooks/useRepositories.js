import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  
  

  const result = useQuery(ALL_REPOSITORIES, {
fetchPolicy: 'cache-and-network'
})
 

const repositories = result

  
  return { repositories };
};

export default useRepositories;