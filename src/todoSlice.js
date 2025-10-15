import {createSlice} from '@reduxjs/toolkit'
const todoSlice=createSlice({
    name:"todolist",
    initialState:{todos:[]},
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({id:Date.now(),text:action.payload,completed:false})
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((t)=>t.id!==action.payload)

        },
        editTodo:(state,action)=>{
            const{id,newText}=action.payload
            const todo=state.todos.find((t)=>t.id===id)
            if(todo)todo.text=newText
        }
    }

})
export const{addTodo,deleteTodo,editTodo}=todoSlice.actions
export default todoSlice.reducer

