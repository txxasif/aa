const admin = {
    name: 'asif',
    pass: 'asif',
}

export function getUserStatus(user){
    if(user.name === admin.name && user.pass === admin.pass){
        return true;
    }else{
        return false;
    }
}

