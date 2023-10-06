import SignUpContainer from "./SignUpContainer";
import { useNavigate } from "react-router-native";
import useSignUp from "../../hooks/useSignUp";
import useSignIn from "../../hooks/useSignIn";


const SignUp = () => {
  const [ signUp ] = useSignUp();
  const [ signIn, result ] = useSignIn();
    
    const navigate = useNavigate()

  const onSubmit = async (values) => {
      const { username, password } = values;      
      
      
      try {      
      await signUp({ username, password });
       
      await signIn({ username, password });
       
      navigate('/repository/list')
        
    } catch (e) {
      console.log(e.message);
    }
    };

    return (
        <SignUpContainer onSubmit={onSubmit} loading={result.loading} />
    )

    

}

export default SignUp