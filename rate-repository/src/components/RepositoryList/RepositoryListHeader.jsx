import { Searchbar } from 'react-native-paper';
import {  useState } from 'react';
import ModalComponent from './ModalComponent';


const RepositoryListHeader = ({setRepositoryQuery, sortRepository, buttonText}) => {
  const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => {
      setRepositoryQuery(query) 
      setSearchQuery(query)      
  }

  
  return (
    <>
  <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          mode='view'
  />
    <ModalComponent
          sortRepository={sortRepository}
          buttonText={buttonText}
            />
    </>
  
  ) 
 
}

export default RepositoryListHeader