import { View, Text } from "react-native"
import { format } from 'date-fns'


const ReviewItem = ({ item }) => {

  return (
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
                <Text style={{fontWeight: '700' }}>{ item.user.username }</Text>
                  
              </View>
              <View>
                <Text>{ format(new Date(item.createdAt), 'dd.MM.yyy')  }</Text>
                  
              </View>
              <View>
                <Text style={{padding:10}}>{ item.text }</Text> 
                  
              </View>
          </View>
      
       
      </View>
  )
}

export default ReviewItem