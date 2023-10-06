import { Button, FlatList } from "react-native"
import Text from "./basic/Text"
import useMe from "../hooks/useMe"
import { View, ActivityIndicator } from "react-native"
import { format } from 'date-fns'
import ItemSeparator from './basic/ItemSeparator';
import { useNavigate } from 'react-router-native';
import { useMutation } from "@apollo/client"
import { DELETE_REVIEW } from "../graphql/mutations"

const Reviews = () => {
  const result = useMe(true) 
  
  const navigate = useNavigate()

  const [mutate] = useMutation(DELETE_REVIEW);
  
  if (result.loading) {
    
    return  <View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" />
            </View>
  }

  const {data} = result
  
 

  const myReviews  = data.me
    ? data.me.reviews.edges.map((edge) => edge.node)
    : [];
  
  const deleteReview = async (id) => {
    console.log(id)
    await mutate({
      variables: {deleteReviewId:id}
    })
    
    result.refetch()
  }
  
  return (
    <FlatList
      data={myReviews}
      renderItem={({ item }) => {
        
        const id = item.repository.fullName.replace('/', '.')
        
        return (
          <>
          <View style={{
          display: 'flex',
          flexDirection: 'row'
      }}>
          <View style={{
              width: 50,
              height: 50,
              margin:8,
              borderWidth: 3,
              borderColor: '#0366d6',
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center'
              
          }}>
              <Text
                  style={{
                      color: '#0366d6',
                      fontWeight: '700'
                  }}
              >{item.rating}</Text>
          </View>
          <View style={{
              display: 'flex',
              flexDirection: 'column',
              columnGap: 10
          }}>
              <View>
                <Text style={{fontWeight: '700' }}>{ item.repository.fullName }</Text>
                  
              </View>
              <View>
                <Text>{ format(new Date(item.repository.createdAt), 'dd.MM.yyy')  }</Text>
                  
              </View>
              <View>
                <Text style={{padding:10}}>{ item.text ? item.text : "No review" }</Text> 
                  
              </View>
          </View>
       
      </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 10 }}>
              <Button
                onPress={()=>navigate(`/repository/${id}`)}                
                title="View Repository"
                color="#0366d6"/>
              <Button
                onPress={()=>deleteReview(item.id)}
                title="Delete Review"
                color="#d60342"/>
          </View>
          </>
          )
      }}
      ItemSeparatorComponent={ItemSeparator}
      onEndReachedThreshold={0.5}
    />
  )
}

export default Reviews