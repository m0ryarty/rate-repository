import { FlatList, Pressable } from 'react-native';
import ItemSeparator from '../basic/ItemSeparator'
import Item from '../basic/Item';


import RepositoryListHeader from './RepositoryListHeader'

export const RepositoryListContainer = ({
  repositories,
  onEndReach,
  handlePress,
  setRepositoryQuery,
  buttonText,
  sortRepository

}) => {
  
  const repositoryNodes = repositories
    ? repositories.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({ item }) => {
        
        return (
          <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? '#9dc9e4' : 'white',
          }
          ]} onPress={()=>handlePress(item.id)}>
            <Item repositoryData={item} />
          </Pressable>
        )
      }}
      ListHeaderComponent={<RepositoryListHeader
        setRepositoryQuery={setRepositoryQuery}
        buttonText={buttonText}
      sortRepository={sortRepository}
      />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};



export default RepositoryListContainer;


