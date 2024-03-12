import { createSlice } from "@reduxjs/toolkit";

const taskSlice=createSlice({
    name:"task",
    initialState:{
        tasks:[],
       
    },
    reducers:{
        add:(state,action)=>{
             state.tasks.push(action.payload)
            
        },
        remove:(state,action)=>{
            state.tasks=state.tasks.filter((item)=> item.id!== action.payload)
        },
change:(state,action)=>{
    const sta=state.tasks.find((item)=>item.id===action.payload.id);
    if(sta)
    {sta.status=action.payload.status;}
    console.log(action.payload.status);
}
    }

})
export const{add, remove,change }=taskSlice.actions;
export default taskSlice.reducer