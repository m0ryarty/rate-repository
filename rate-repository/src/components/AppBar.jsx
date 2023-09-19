import { ScrollView} from 'react-native';
import theme from '../theme';
import AppBarTab from './basic/AppBarTab';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import useAuthStorage  from '../hooks/useAuthStorage'
import { useApolloClient } from '@apollo/client'
import { useNavigate } from 'react-router-native'

const AppBar = () => {

  const result = useQuery(ME, {
fetchPolicy: 'cache-and-network'
  })

  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const navigate = useNavigate()

  const signOut = async () => {    
    
    await authStorage.removeAccessToken()
    await client.resetStore()
    navigate('/sign-in')
  }
  
  
  return (
    <ScrollView horizontal style={theme.tabContainer}>
      {result.data.me
        ?<>
          <AppBarTab tabTitle= 'Repositories' to='/' />          
          < AppBarTab tabTitle='Sign Out' onPress={signOut} />
        </>
        : < AppBarTab tabTitle='Sign In' to='/sign-in' />
      }
    </ScrollView>)
  
};

export default AppBar;