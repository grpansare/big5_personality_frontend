import { createSlice}  from '@reduxjs/toolkit'
const initialState={
    currentUser:null
}
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            console.log(action.payload);
            
            state.currentUser=action.payload;
          
        },
        getUser:(state)=>{
            return  state.currentUser;
        }
    }
})

export const {setUser,getUser}=userSlice.actions
export default userSlice.reducer

