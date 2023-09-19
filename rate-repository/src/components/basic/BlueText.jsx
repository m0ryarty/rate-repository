import { StyleSheet } from 'react-native';
import Text from './Text'

const styles = StyleSheet.create({

  blueText: {     
      textAlign: 'center',
        backgroundColor: '#0366d6',
        color: 'white',
        maxWidth: '100%',
        padding: 10,
        borderRadius: 5,
        marginBottom: 5
      }
})

const BlueText = ({ text }) => {
  return <Text style={styles.blueText}>{text}</Text>

 
}

export default BlueText