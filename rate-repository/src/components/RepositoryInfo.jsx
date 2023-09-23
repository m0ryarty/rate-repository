import { View, ActivityIndicator } from "react-native"
import useRepository from "../hooks/useRepository"
import Item from "./Item"
import * as Linking from 'expo-linking'


const RepositoryInfo = ({repositoryId}) => {  


  
  const repository = useRepository(repositoryId)

  if (repository.repository.loading) {
    return (<View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" />
            </View>)
  }  
  
const node = repository.repository.data.repository  

  const pressHandler = () => {   
    Linking.openURL(node.url) 
  }

    return (<Item
        repositoryData={node}
        gitButton={true}
        onPress={pressHandler}
    />)
}



export default RepositoryInfo