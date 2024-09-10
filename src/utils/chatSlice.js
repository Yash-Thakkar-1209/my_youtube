import {
    createSlice
} from '@reduxjs/toolkit'
import { LIVE_CHAT_COUNT } from './constants';


export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        message: [],
    },
    reducers: {
       addChat : (state, action) => {
           state.message.splice(LIVE_CHAT_COUNT,1);
           state.message.unshift(action.payload);
       }
    },
})


export const { addChat } = chatSlice.actions;

export default chatSlice.reducer