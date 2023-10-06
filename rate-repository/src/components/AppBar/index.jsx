import { ScrollView} from 'react-native';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import useAuthStorage  from '../../hooks/useAuthStorage'
import { useApolloClient } from '@apollo/client'
import { useNavigate } from 'react-router-native'
import useMe from '../../hooks/useMe';

const AppBar = () => {

  const result = useMe()

  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const navigate = useNavigate()

  const signOut = async () => {    
    
    await authStorage.removeAccessToken()
    await client.resetStore()
    navigate('/')
  }

  if (result.loading) {
    return
  }
  
  return (
    <ScrollView horizontal style={theme.tabContainer}>
      {result.data.me
        ?<>
          <AppBarTab tabTitle= 'Repositories' to='repository/list' />          
          <AppBarTab tabTitle= 'Create a review' to='review/create' />          
          <AppBarTab tabTitle= 'My Reviews' to='review/reviews' />          
          
          
          < AppBarTab tabTitle='Sign Out' onPress={signOut} />
        </>
        : <>
           < AppBarTab tabTitle='Sign In' to='sign/in' />
          < AppBarTab tabTitle='Sign Up' to='sign/up' />
        </>
      }
    </ScrollView>)
  
};

export default AppBar;