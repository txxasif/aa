import { useState } from "react";
import { Heading } from "../../Heading/headin";
import { FormInput } from "../../formInput/formInput";
import './signUp.css';
import { Button } from "../../button/button";
const signUpData = {
    email: '',
    password: '',
    confirmPassword: '',
}
export function SignUp(){
    const [data,setData] = useState(signUpData);
    function handleChange(e){
        const {name,value} = e.target;
        setData({...data,[name]:value});
    }
    function onSubmit(e){
        e.preventDefault();
    }
    return(
        <div className="signUpContainer">
            <Heading heading="Sign UP" />
            <form onSubmit={onSubmit}>
            <FormInput type="email" name="email" placeholder="email" value={data.email} onChange={handleChange} />
            <FormInput type="password" name="password" placeholder="password" value={data.password} onChange={handleChange} />
            <FormInput type="password" name="password" placeholder="password" value={data.password} onChange={handleChange} />
            <Button buttonText="Sign Up"/>
            </form>
        </div>
    )
}