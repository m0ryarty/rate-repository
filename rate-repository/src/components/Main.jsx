
import { StyleSheet, View} from 'react-native';
import RepositoryList from './RepositoryList';

import AppBar from './AppBar';
import { Route, Routes , Navigate } from 'react-router-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SingleRepository from './SingleRepository';
import ReviewCreate from './ReviewCreate';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import Reviews from './Reviews';

const styles = StyleSheet.create({
  container: {
   
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {

 
  
   const result = useQuery(ME, {
fetchPolicy: 'cache-and-network'
   })
  
  if (result.loading) {
    return
  }

  return (
    
    

      
    <View style={styles.container}>
      <AppBar/>      
      <Routes>

        <Route path='repository'>
          <Route path='list' element={<RepositoryList />} exact/>
          <Route path=':repositoryId' element={<SingleRepository />} />
        </Route>

        <Route path='review'>
          <Route path='create' element={<ReviewCreate/> } exact />
          <Route path='reviews' element={<Reviews/> } exact />
        </Route>

        <Route path='sign'>
        <Route path='in' element={<SignIn />} exact />
        <Route path='up' element={<SignUp />} exact />
        </Route>
        
        <Route path='*' element={result.data.me
          ? <Navigate to='/repository/list' replace />
          : <Navigate to='/sign/in' replace />} /> 
      
      </Routes>
    </View>    
  );
};

export default Main;