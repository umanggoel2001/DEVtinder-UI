import { createSlice } from '@reduxjs/toolkit'
const feedSlice = createSlice({
    name:"feed",
    initialState:[],
    reducers:{
        addFeed:(state,action)=>{
            return action.payload;
        },
        removeFeed:(state,action)=>{
            console.log(action.payload);
            
            const newArray = state.filter((req) => {
                console.log(req, action.payload);
                
                return req._id !== action.payload
            });
           
            
            return newArray;
        }
    }
    
})

export const {addFeed , removeFeed} = feedSlice.actions;
export default feedSlice.reducer;