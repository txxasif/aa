import { configureStore,combineReducers } from '@reduxjs/toolkit';
import  {userReducer}    from './slice/userSlice/userSlice';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
const rootReducer = combineReducers({
    user: userReducer,
})

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false
    }).concat(sagaMiddleWare)
})
sagaMiddleWare.run(rootSaga);

