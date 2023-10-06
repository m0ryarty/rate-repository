import { Formik } from 'formik';
import SignInForm from './SignInForm';
import { ActivityIndicator, View } from 'react-native';
import * as yup from 'yup';


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

const SignInContainer = ({ onSubmit, result }) => {

return (<>
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {({handleSubmit})=> <SignInForm onSubmit={handleSubmit}/>}
        
    </Formik>
        {result
            && <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>}
    </>)
}

export default SignInContainer