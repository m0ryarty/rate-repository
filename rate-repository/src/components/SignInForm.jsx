import { View, Button } from 'react-native';

import FormikTextInput from './FormikTextInput'

const SignInForm = ({onSubmit}) => {
  return (
      
          <View>
                <FormikTextInput
                    name='userName'
                    placeholder='Username'
                />
                <FormikTextInput
                    secureTextEntry
                    name='password'
                    placeholder='Password'
                />
                
              <Button
                onPress={onSubmit}  
                title="Sign In"
                color="#0366d6"
            />
                
            </View>
    
  )
}

export default SignInForm