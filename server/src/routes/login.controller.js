import { getUserStatus } from "../models/login.model.js"
export function loginController(req,res){
    const user = req.body; 
    console.log(user);
    if(!getUserStatus(user)){
        return res.status(400).json({
            message: 'Invalid username or password'
        });
    }
    return res.status(200).json({
        user
    })
}
