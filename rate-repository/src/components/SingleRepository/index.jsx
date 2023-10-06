import { FlatList, View, ActivityIndicator } from 'react-native';
import ReviewItem from './ReviewItem';
import ItemSeparator from '../basic/ItemSeparator';
import { useParams } from 'react-router-native';
import RepositoryInfo from './RepositoryInfo';
import useReviews from '../../hooks/useReviews';

const SingleRepository = () => {
  const { repositoryId } = useParams()
  
  
const { reviews, loading, fetchMore } = useReviews({first:10, repositoryId})
  
  
  if (loading) {
    return  <View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" />
            </View>
  }
  
  const reviewData = reviews
    ? reviews.repository.reviews.edges.map((edge) => edge.node)
    : [];

  const onEndReach = () => {
   
    fetchMore();
  };
  console.log(reviewData)
  return (<FlatList
    data={reviewData}
    onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) =>  <ReviewItem item={ item} />}
    ListHeaderComponent={() => {
      return (<>
        <RepositoryInfo repositoryId={repositoryId} />
        <ItemSeparator/>
      </>)
    }}
      ItemSeparatorComponent={ItemSeparator}
    />)
}

export default SingleRepository