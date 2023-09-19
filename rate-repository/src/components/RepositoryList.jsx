import { FlatList } from 'react-native';
import ItemSeparator from './basic/ItemSeparator'
import Item from './Item';
import {ActivityIndicator, View} from 'react-native';
import useRepositories from '../hooks/useRepositories';



const RepositoryList = () => {

  
  const {repositories} = useRepositories()

  if (repositories.loading) {
    return  <View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" />
            </View>
  } 
  
 
  
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.data.repositories.edges.map(edge => edge.node)
    : [];
  
  return (
    <FlatList
      data={repositoryNodes}      
      renderItem={({ item }) => <Item repoList={item} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryList;
