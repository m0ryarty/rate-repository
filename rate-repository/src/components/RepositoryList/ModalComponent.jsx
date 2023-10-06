import { useState } from 'react';
import { Modal, Portal, Text, Button } from 'react-native-paper';


const ModalComponent = ({sortRepository, buttonText}) => {
  const [ visible, setVisible ] = useState(false);
  
  
  

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, marginHorizontal: 10, borderRadius: 5};

  const textItem = [ 'Latest repositories', 'Highest rated repositories', 'Lowest rated repositories' ]

  const handlePress = (item) => {
    sortRepository(item)
    
    hideModal()
    
  }

  return (
    <>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          {textItem.map(item =>
            
              <Text
                onPress={()=>handlePress(item)}
                key={item}    
            style={{
              fontSize: 20,
              marginBottom: 10
            }}
          > {item} </Text>

            
          )}
          
        </Modal>
      </Portal>
      <Button textColor='black' style={{marginTop: 12}} onPress={showModal}>
       {buttonText}
      </Button>
    </>
    
  );
};

export default ModalComponent;