import {ActivityIndicator, View} from 'react-native';
import useRepositories from '../hooks/useRepositories';

import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories } = useRepositories();

  if (repositories.loading) {
    return  <View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" />
            </View>
  }

  const repositoriesData = repositories.data.repositories
  

  return <RepositoryListContainer repositories={repositoriesData} />;
};

export default RepositoryList;