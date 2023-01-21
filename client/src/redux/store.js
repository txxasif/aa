import { configureStore,combineReducers } from '@reduxjs/toolkit';
import  {userReducer}    from './slice/userSlice/userSlice';

const rootReducer = combineReducers({
    user: userReducer,
})


export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false
    })
})

