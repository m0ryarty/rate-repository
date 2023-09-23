import { Pressable, StyleSheet } from 'react-native';
import Text from './Text'

const styles = StyleSheet.create({

  blueText: {     
      textAlign: 'center',       
        color: 'white',
        maxWidth: '100%',
        padding: 10,
        borderRadius: 5,
    marginBottom: 5,
    fontWeight: '700',
        fontSize: 16
      }
})

const BlueText = ({ text, onPress }) => {
  return (
    <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? '#1d99e7' : '#0366d6',
          }
        ]} onPress={onPress}>
    <Text testID='repositoryItem' style={styles.blueText}>{text}</Text>
    
    </Pressable>
  )
  

 
}

export default BlueText