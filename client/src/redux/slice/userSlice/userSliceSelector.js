import { createAction } from '@reduxjs/toolkit';
export const userSelector =(state) => {
    console.log(state);
    return state.user}