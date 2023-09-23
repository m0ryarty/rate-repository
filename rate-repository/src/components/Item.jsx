import {
    
  View,
  StyleSheet,  
  Image
} from 'react-native';
import Text from './basic/Text'
import BlueText from './basic/BlueText';
import theme from '../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#b7f3ff'
  },
  container: {
    flex: 1,    
    padding: 10,
    
  },
  item: {    
    backgroundColor: '#c2dfcd',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15
  },

  title: {
    fontSize: 32,
  },

  subHeadText: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.subheading,
    marginBottom: 5
  },  
  normalText: {
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.subheading,
    marginBottom: 5,
    paddingHorizontal: 2
  },
  
  tinyImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5
  },
  
  textContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    maxWidth: '90%'
  },
  statisticContainer: {
    flexDirection: 'row',
    marginHorizontal: 25,
    justifyContent: 'space-between'
  }
});



const formattedNumber = (number) => {
  return number > 1000 ? (number/1000).toFixed(1)+'k' : number 
}

const StatisticNumber = ({number}) => {
return <Text testID='repositoryItem' style={styles.subHeadText}>{formattedNumber(number)}</Text>
}

const SubHeadText = ({text}) => {
 return <Text testID='repositoryItem' style={styles.subHeadText}>{text}</Text>
}

const NormalText = ({text}) => {
  return <Text testID='repositoryItem' style={styles.normalText}>{text}</Text>
}

const Statistics = ({number, text}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <StatisticNumber number={ number} />
      <NormalText text={text }/>
    </View>
  )
}



const Item = ({ repositoryData, gitButton, onPress }) => {  
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
        <View>
          <Image
            style={styles.tinyImage}
            source={{
            uri: `${repositoryData.ownerAvatarUrl}`,
            }}
          />
        </View>
        
        <View style={styles.textContainer}> 
          <SubHeadText text={repositoryData.fullName } />    
          <NormalText text={repositoryData.description} />
          <BlueText text={ repositoryData.language} />              
        </View>

      </View>

      <View style={styles.statisticContainer}>
        <Statistics
        
          number={repositoryData.stargazersCount}
          text={'Stars'}
        />
        <Statistics
        
          number={repositoryData.forksCount}
          text={'Forks'}
        />
        <Statistics
        
          number={repositoryData.reviewCount}
          text={'Reviews'}
        />
        <Statistics
        
          number={repositoryData.ratingAverage}
          text={'Rating'}
        />        
      </View>
      {gitButton && <BlueText onPress={onPress} text='Open in GitHub'/>}
    </View>
    )
};

export default Item