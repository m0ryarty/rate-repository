import { Pressable} from 'react-native';
import theme from '../theme'
import { Link } from 'react-router-native';
import Text from './Text'
    
    
const AppBarTab = ({ tabTitle, to }) => {
  return (
    <Pressable style={theme.tabItens}>
      <Link to={to}>
          <Text style={theme.tabText}>{ tabTitle}</Text>
      </Link>
    </Pressable>
  )
}

export default AppBarTab