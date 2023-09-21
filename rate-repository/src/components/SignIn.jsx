import SignInContainer from './SigninContainer';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native'


const SignIn = () => {
    const [ signIn, result ] = useSignIn();
    
    const navigate = useNavigate()

  const onSubmit = async (values) => {
      const { username, password } = values;      
      
   
    try {
        await signIn({ username, password });
       
      navigate('/repository-list')
        
    } catch (e) {
      console.log(e);
    }
    };

    return (
        <SignInContainer onSubmit={onSubmit} loading={result.loading} />
    )

    
};



export default SignIn;