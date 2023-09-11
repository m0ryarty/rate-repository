import { Formik } from 'formik';
import * as yup from 'yup';
import SignInForm from './SignInForm';

const validationSchema = yup.object().shape({
    userName: yup
        .string().required('Username is required'),
    password: yup
        .string()
    .required('Password is required')
})


const initialValues = {
    userName: '',
    password: ''
}

const onSubmit = (values) => {
    console.log('values:',values)
}

const SignIn = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({handleSubmit})=> <SignInForm onSubmit={handleSubmit}/>}
            
        </Formik>)
};

export default SignIn;