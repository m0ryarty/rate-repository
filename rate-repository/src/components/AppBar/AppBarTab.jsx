import { Pressable} from 'react-native';
import theme from '../../theme'
import { Link } from 'react-router-native';
import Text from '../basic/Text'
    
    
const AppBarTab = ({ tabTitle, to, onPress }) => {
  return (
    <Pressable style={theme.tabItens}>
      <Link onPress={onPress} to={to}>
          <Text style={theme.tabText}>{ tabTitle}</Text>
      </Link>
    </Pressable>
  )
}

export default AppBarTab