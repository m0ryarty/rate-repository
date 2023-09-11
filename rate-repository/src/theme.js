import Constants from 'expo-constants';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textTertiary: "#fff",
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    head: 18
  },
  
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  textBox: {   
    borderWidth: 1,        
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center'
  },
  tabContainer: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row',    
    backgroundColor: '#24292e',    
    maxHeight: 100,
    minHeight: 90,
    padding: 5
  },
  tabItens: {
    justifyContent: 'flex-end',
    padding: 10,
    
  },
  tabText: {
    color: '#fff',
    fontSize: 18
  }
};

export default theme;