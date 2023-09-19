import { Formik } from 'formik';
import * as yup from 'yup';
import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';
import { ActivityIndicator, View } from 'react-native';

import { useNavigate } from 'react-router-native'

const validationSchema = yup.object().shape({
    username: yup
        .string().required('Username is required'),
    password: yup
        .string()
    .required('Password is required')
})


const initialValues = {
    username: '',
    password: ''
}


const SignIn = () => {
    const [ signIn, result ] = useSignIn();
    
    const navigate = useNavigate()

  const onSubmit = async (values) => {
      const { username, password } = values;
      
      
   
    try {
        await signIn({ username, password });
       
      navigate('/')
        
    } catch (e) {
      console.log(e);
    }
    };

    return (
        <>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({handleSubmit})=> <SignInForm onSubmit={handleSubmit}/>}
            
        </Formik>
            {result.loading
                && <View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" />
            </View>}
        </>
    )
    
};

export default SignIn;