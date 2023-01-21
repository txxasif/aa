import { createSlice }  from '@reduxjs/toolkit';
const initialState = {
    currentUser: [],
    

}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setCurrentUser: (state,action) => {
            state.currentUser  = action.payload;
        },
        loginWithEmail: () => {}
    }

})

export const { setCurrentUser,loginWithEmail } = userSlice.actions;
export const userReducer = userSlice.reducer;