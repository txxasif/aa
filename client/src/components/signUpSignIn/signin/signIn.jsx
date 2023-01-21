import { useState } from "react";
import {FormInput} from "../../formInput/formInput";
import { Heading } from "../../Heading/headin";
import './signIn.css'
import { Button } from "../../button/button";
import { useDispatch } from "react-redux";
import { loginWithEmail } from "../../../redux/slice/userSlice/userSlice";

const signInData = {
    email: '',
    pass: ''
}
export function SignIn(){
    const dispatch = useDispatch();
    const [data,setData] = useState(signInData);
    const setFormData = (e) => {
        const {name,value} = e.target;
        setData({...data,[name]:value});
    }
    function handleSubmit(e){
        e.preventDefault();
    }
    function onClick(){
        dispatch(loginWithEmail(data));
    }
    return(
        <div className="sign-in-container">
            <Heading heading={"Sign In"} />
            <form onSubmit={handleSubmit}>
            <FormInput name="email" type="email"label="Email" value={data.email} onChange={setFormData} placeholder="email" />
            <FormInput name="pass" type="password" label="Password" value={data.pass} onChange={setFormData} placeholder="password" />
            <div className="buttons">
            <Button buttonText={"Sign in"} onClick={onClick}/>
            <Button buttonText={"Forgot Password?"} />
            </div>
            
            </form>
        </div>
        
    )
}