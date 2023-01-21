const admin = {
    name: 'asif@gmail.com',
    pass: 'asif',
}

export function getUserStatus(user){
    if(user.email === admin.name && user.pass === admin.pass){
        return true;
    }else{
        return false;
    }
}

