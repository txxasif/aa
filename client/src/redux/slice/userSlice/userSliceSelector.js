import { createSelector } from '@reduxjs/toolkit';
export const userSelecting =(state) => {
    console.log(state.user,'kk');
    console.log(state.user.currentUser,'--');
    return state.user
}
export const userSelector = createSelector([userSelecting],(user)=>{

    return user.currentUser[0];
})