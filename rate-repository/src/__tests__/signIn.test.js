import { render, fireEvent, screen, waitFor } from '@testing-library/react-native';
import SignInContainer from '../components/SigninContainer'; 

 

describe('Sign in form', () => {
  it('calls function provided by onSubmit prop after pressing the submit button', async ()  => {
    const onSubmit = jest.fn();
    render(<SignInContainer onSubmit={onSubmit} loading={false} />);
    
    fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
    fireEvent.press(screen.getByText('Sign In'));

      await waitFor(() => {
      
          expect(onSubmit).toHaveBeenCalledTimes(1);
      
          // onSubmit.mock.calls[0][0] contains the first argument of the first call
          expect(onSubmit.mock.calls[0][0]).toEqual({
            username: 'kalle',
            password: 'password',
          });
      })
      
  });
});