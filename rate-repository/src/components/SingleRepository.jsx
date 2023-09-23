import { FlatList, View, ActivityIndicator } from 'react-native';
import ReviewItem from './ReviewItem';
import ItemSeparator from './basic/ItemSeparator';
import { useParams } from 'react-router-native';
import RepositoryInfo from './RepositoryInfo';
import useReviews from '../hooks/useReviews';

const SingleRepository = () => {
  const {repositoryId} = useParams()

const { reviews } = useReviews(repositoryId)
  
  if (reviews.loading) {
    return  <View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" />
            </View>
  }

    

  const reviewData = reviews
    ? reviews.data.repository.reviews.edges.map((edge) => edge.node)
    : [];

  
  return (<FlatList
      data={reviewData}  
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