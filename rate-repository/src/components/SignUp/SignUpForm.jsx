import { View, Button } from 'react-native';

import FormikTextInput from '../basic/FormikTextInput'

const SignUpForm = ({onSubmit}) => {
  return (
      
          <View>
                <FormikTextInput
                    name='username'
                    placeholder='Username'
                />
                <FormikTextInput
                    secureTextEntry
                    name='password'
                    placeholder='Password'
                />
                <FormikTextInput
                    secureTextEntry
                    name='confirmation'
                    placeholder='Password Confirmation'
                />
                
              <Button
                onPress={onSubmit}  
                title="Sign Up"
                color="#0366d6"
            />
                
            </View>
    
  )
}

export default SignUpForm