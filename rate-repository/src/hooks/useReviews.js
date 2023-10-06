import { useQuery } from '@apollo/client';
import { REVIEWS } from '../graphql/queries';


const useReviews = (variables) => {
   
  const {data, loading, fetchMore, ...result} = useQuery(REVIEWS, {
fetchPolicy: 'cache-and-network', variables:variables
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };
  


  return {
    fetchMore: handleFetchMore,
    reviews: data,
    loading,
    ...result
  };
};

export default useReviews;