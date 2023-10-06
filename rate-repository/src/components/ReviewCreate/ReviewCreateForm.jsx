import { View, Button } from 'react-native';

import FormikTextInput from '../basic/FormikTextInput'

const ReviewCreateForm = ({onSubmit}) => {
  return (
      
          <View>
                <FormikTextInput
                    name='ownerName'
                    placeholder='Repository owner name'
                />
                <FormikTextInput
                    name='repositoryName'
                    placeholder='Repository name'
                />
                <FormikTextInput
                    name='rating'
                    placeholder='Rating between 0 and 100'
                />
                <FormikTextInput
                    name='review'
                    placeholder='Review'
                />
                
              <Button
                 onPress={onSubmit} 
                title="Create a Review"
                color="#0366d6"
            />
                
            </View>
    
  )
}

export default ReviewCreateForm