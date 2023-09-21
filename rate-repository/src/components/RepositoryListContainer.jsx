import { FlatList } from 'react-native';
import ItemSeparator from './basic/ItemSeparator'
import Item from './Item';


export const RepositoryListContainer = ({ repositories }) => {
 
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({ item }) => <Item repoList={item} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryListContainer