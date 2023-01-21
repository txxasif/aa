import { takeLatest, call, all, put } from 'redux-saga/effects';
import { loginWithEmail,setCurrentUser } from './userSlice';

export async function checkUser(data){
  try{
    const getResult = await fetch('http://localhost:8000/login',{
        method : 'post',
        headers:  { 'content-type': 'application/json'},
        body: JSON.stringify(data),
    });
    const result = await getResult.json();
    return result;
  }catch(e){
    console.log(e);
  }
}
export function* loginWithEmailStart({payload}){
     const user = yield call(checkUser,payload);
     console.log(user);
  
}
export function* loginStart(){
    yield takeLatest(loginWithEmail.type,loginWithEmailStart)
}
export function* userSaga(){
    yield all([call(loginStart)])
}