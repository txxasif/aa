import { SignIn } from '../components/signUpSignIn/signin/signIn';
import { SignUp } from '../components/signUpSignIn/signup/signUp';
import './signUpSignIn.css';
export default function SignUpSignIn(){
    return (
      <div className="sign-in-sign-up-container">
        <SignIn />
        <SignUp />
      </div>
    )
}