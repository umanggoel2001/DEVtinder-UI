import { createSlice } from '@reduxjs/toolkit'
const connectionsSlice = createSlice({
    name:"connections",
    initialState:[],
    reducers:{
        addConnecetions:(state,action)=>{
            return action.payload;
        },
        removeConnections:(state,action)=>{
            return [];
        }
    }
    
})

export const {addConnecetions, removeConnections} = connectionsSlice.actions;
export default connectionsSlice.reducer;