import {ActivityIndicator, View} from 'react-native';
import useRepositories from '../../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import {RepositoryListContainer} from './RepositoryListContainer';
import { useState } from 'react';
import _ from 'lodash';


const RepositoryList = () => {
  const [ sortObj, setSortObj ] = useState([ 'CREATED_AT', 'DESC' ])
  const [repositoryQuery, setRepositoryQuery] = useState('')
  
  const [ buttonText, setButtonText ] = useState('Latest repositories')

  const variables = {searchKeyword: repositoryQuery, orderBy: sortObj[0], orderDirection: sortObj[1] }

  const { repositories, loading, fetchMore } = useRepositories({first:8, ...variables});
  
  const navigate = useNavigate()
 

  const sortRepository = (item) => {
    switch (item) {
      case 'Latest repositories':
        setButtonText('Latest repositories')
        return setSortObj(['CREATED_AT', 'DESC'])
      case 'Highest rated repositories':
        setButtonText('Highest rated repositories')
        return setSortObj(['RATING_AVERAGE', 'DESC'])
      case 'Lowest rated repositories':
        setButtonText('Lowest rated repositories')
        return setSortObj(['RATING_AVERAGE', 'ASC'])
      default:
        break;
    }
    
  }

  
  if (loading) {
    return  <View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" />
            </View>
  }

  const repositoriesData = repositories.edges
  
  const handlePress = (id) => {
    
    navigate(`/repository/${id}`)
  }
  
  const onEndReach = () => {
    fetchMore();
  };

  return <RepositoryListContainer
    repositories={repositoriesData}
    onEndReach={onEndReach}
    sortRepository={sortRepository}
    buttonText={buttonText}
    setRepositoryQuery={_.debounce(setRepositoryQuery, 800)}
    handlePress={handlePress}
  />;
};

export default RepositoryList;