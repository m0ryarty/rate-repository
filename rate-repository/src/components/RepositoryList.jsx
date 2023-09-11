import {
  FlatList,  
  View,
  StyleSheet,  
  Image
} from 'react-native';
import Text from './Text'
import BlueText from './BlueText';
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

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

const formattedNumber = (number) => {
  return number > 1000 ? (number/1000).toFixed(1)+'k' : number 
}

const StatisticNumber = ({number}) => {
return <Text style={styles.subHeadText}>{formattedNumber(number)}</Text>
}

const SubHeadText = ({text}) => {
 return <Text style={styles.subHeadText}>{text}</Text>
}

const NormalText = ({text}) => {
  return <Text style={styles.normalText}>{text}</Text>
}

const Statistics = ({number, text}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <StatisticNumber number={ number} />
      <NormalText text={text }/>
    </View>
  )
}



const Item = ({ repoList }) => {  
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            style={styles.tinyImage}
            source={{
            uri: `${repoList.ownerAvatarUrl}`,
            }}
          />
        </View>
        
        <View style={styles.textContainer}> 
          <SubHeadText text={repoList.fullName } />    
          <NormalText text={repoList.description} />
          <BlueText text={ repoList.language} />              
        </View>

      </View>

      <View style={styles.statisticContainer}>
        <Statistics
          number={repoList.stargazersCount}
          text={'Stars'}
        />
        <Statistics
          number={repoList.forksCount}
          text={'Forks'}
        />
        <Statistics
          number={repoList.reviewCount}
          text={'Reviews'}
        />
        <Statistics
          number={repoList.ratingAverage}
          text={'Rating'}
        />        
      </View>
      
    </View>
)};

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}      
      renderItem={({ item }) => <Item repoList={item} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryList;
