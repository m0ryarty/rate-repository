import { useQuery } from '@apollo/client';
import { REPOSITORY } from '../graphql/queries';

const useRepository = (repositoryId) => {
  
  

  const result = useQuery(REPOSITORY, {
fetchPolicy: 'cache-and-network', variables:{repositoryId}
})
 
   
   const repository = result

  
  return { repository };
};

export default useRepository;