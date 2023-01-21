import { useState } from "react";
import {FormInput} from "../../formInput/formInput";
import { Heading } from "../../Heading/headin";
import './signIn.css'
import { Button } from "../../button/button";
const signInData = {
    email: '',
    password: ''
}
export function SignIn(){
    const [data,setData] = useState(signInData);
    const setFormData = (e) => {
        const {name,value} = e.target;
        setData({...data,[name]:value});
    }
    function handleSubmit(e){
        e.preventDefault();
    }
    return(
        <div className="sign-in-container">
            <Heading heading={"Sign In"} />
            <form onSubmit={handleSubmit}>
            <FormInput name="email" type="email"label="Email" value={data.email} onChange={setFormData} placeholder="email" />
            <FormInput name="password" type="password" label="Password" value={data.password} onChange={setFormData} placeholder="password" />
            <div className="buttons">
            <Button buttonText={"Sign in"} />
            <Button buttonText={"Forgot Password?"} />
            </div>
            
            </form>
        </div>
        
    )
}