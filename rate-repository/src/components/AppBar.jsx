import { ScrollView} from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';




const AppBar = () => {
  return (
    <ScrollView horizontal style={theme.tabContainer}>
      <AppBarTab tabTitle= 'Repositories' to='/' />
      <AppBarTab tabTitle= 'Sign In' to= '/sign-in' />
    </ScrollView>)
  
};

export default AppBar;