import { FlatList, Pressable } from 'react-native';
import ItemSeparator from './basic/ItemSeparator'
import Item from './Item';
import { useNavigate } from 'react-router-native'


export const RepositoryListContainer = ({ repositories }) => {
 
  const navigate = useNavigate()

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  
  const handlePress = (id) => {
   
    navigate(`/repository/${id}`)
  }
  
  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({ item }) => {
        
        return (
          <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? '#9dc9e4' : 'white',
          }
        ]} onPress={()=> handlePress(item.id)}>
            <Item repositoryData={item} />
          </Pressable>
        )
      }}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryListContainer