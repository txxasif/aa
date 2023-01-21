import { all,call } from "redux-saga/effects";
import { userSaga } from "./slice/userSlice/userSaga";

export function* rootSaga(){
    yield all([call(userSaga)])
}