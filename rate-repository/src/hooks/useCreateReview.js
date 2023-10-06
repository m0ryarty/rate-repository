import { useMutation } from "@apollo/client"
import { CREATE_REVIEW } from "../graphql/mutations"


import { useApolloClient } from '@apollo/client'


const useCreateReview = () => {
  
  const client = useApolloClient()
  
    
  const [mutate, result] = useMutation(CREATE_REVIEW);
  
  
  const newReview = async (reviewObj) => {

    try {
      const  data = await mutate({ variables:{
      ownerName: reviewObj.ownerName,
      repositoryName: reviewObj.repositoryName,
      rating: Number(reviewObj.rating),
      text: reviewObj.review
      }
      })
     
    client.resetStore()
    
    return data
      
    } catch (e) {
      console.log('Erro: ', e)
    }
        
  };
  
  return [newReview, result];
};

export default useCreateReview