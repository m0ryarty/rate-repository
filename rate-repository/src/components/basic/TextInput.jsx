import { TextInput as NativeTextInput, StyleSheet, View, Platform } from 'react-native';
import theme from '../../theme'
const styles = StyleSheet.create({  
 
  textBox: {
    ...theme.textBox,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    fontFamily: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    }),
  },
  errorTextBox: {
    ...theme.textBox,
    borderColor: '#d73a4a'
  }
});

const TextInput = ({error, ...props }) => {
 
  return <View style={error ? styles.errorTextBox : styles.textBox}>
<NativeTextInput  {...props} />
  </View> ;
    
};

export default TextInput;