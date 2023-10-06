
import { Formik } from 'formik';
import * as yup from 'yup';
import ReviewCreateForm from './ReviewCreateForm';


const validationSchema = yup.object().shape({
    ownerName: yup
        .string().required('Repository owner name is required'),
    repositoryName: yup
        .string()
    .required('Repository name is required'),
    rating: yup
        .number()
    .required('Rating is required'),
    review: yup
        .string()
    
})


const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: null,
    review: ''
}

const ReviewCreateContainer = ({onSubmit}) => {

return (<>
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {({handleSubmit})=> <ReviewCreateForm onSubmit={handleSubmit}/>}
        
    </Formik>
        
    </>)
}



export default ReviewCreateContainer