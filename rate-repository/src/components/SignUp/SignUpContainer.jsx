import { Formik } from 'formik';
import SignUpForm from './SignUpForm';
import { ActivityIndicator, View } from 'react-native';
import * as yup from 'yup';


const validationSchema = yup.object().shape({
    username: yup
        .string().min(5, 'Must be 5 characters long').max(30).required('Username is required'),
    password: yup
        .string().min(5).max(50).required('Password is required'),
    confirmation: yup
        .string().oneOf([yup.ref('password')],'Password does not match').required('Confirmation is required')
})


const initialValues = {
    username: '',
    password: '',
    confirmation: ''
}

const SignUpContainer = ({ onSubmit, loading }) => {

return (<>
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {({handleSubmit})=> <SignUpForm onSubmit={handleSubmit}/>}
        
    </Formik>
        {loading
            && <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>}
    </>)
}

export default SignUpContainer