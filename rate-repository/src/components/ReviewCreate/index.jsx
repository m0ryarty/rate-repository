import useCreateReview from '../../hooks/useCreateReview';
import ReviewCreateContainer from './ReviewCreateContainer';
import { useNavigate } from 'react-router-native'

const ReviewCreate = () => {
    const [ newReview, result ] = useCreateReview();
    
    const navigate = useNavigate()

  const onSubmit = async (values) => {
    
   
    try {
      const { data } = await newReview(values);
      
      const repositoryId = data.createReview.id.replace(`${data.createReview.id.split('.')[0]}.`, '') 
       
      
      
      navigate(`/repository/${repositoryId}`)

        
    } catch (e) {
      console.log('e', e);
    }
    };


      

    return (
        <ReviewCreateContainer onSubmit={onSubmit} loading={result.loading} />
    )

    
};





export default ReviewCreate