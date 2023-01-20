import { useState } from "react";
import FormInput from "../../formInput/formInput";
const signInData = {
    email: '',
    pass: ''
}
export function SignIn(){
    const [data,setData] = useState(signInData);
    function setFormData(e){
        const {name,value} = e.target;
     
        setData({...data,[name]:value});
        console.log(data.email);
        console.log(data.pass);
    }
    function handleSubmit(e){
        e.preventDefault();
    }
    return(
        <div className="sign-in-container">
            <form onSubmit={handleSubmit}>
            <FormInput name="email" label="email" type="text" value={data.email} onChange={setFormData}/>
            <FormInput name="password" label="password" type="text" value={data.pass} onChange={setFormData}/>
            </form>
        </div>
        
    )
}