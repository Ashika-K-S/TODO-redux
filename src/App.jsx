import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTodo,deleteTodo,editTodo} from "./todoSlice";
function App(){
  const[input,setInput]=useState("")
  const[edit,setEdit]=useState("")
  const todos=useSelector((state)=>state.todo.todos);
  const dispatch=useDispatch()
  const handleAdd=()=>{
    if(input.trim()==="")return;
    if(edit)
    {
      dispatch(editTodo({id:edit,newText:input}))
      setEdit(null)
    }else{
    dispatch(addTodo(input))
    setInput("")
  }
}
  return(
   <div>
    <h1>TodoList</h1>
    <input text="input"value={input}onChange={e=>setInput(e.target.value)} placeholder="Add todo"></input>
    <button onClick={handleAdd}>AddTodo</button>
    <ul>
     {todos.map((t)=>(<li key={t.id}>{t.text}
           <button onClick={()=>dispatch(deleteTodo(t.id))}>deleteTodo</button>
           <button onClick={()=>{setEdit(t.id);setInput(t.text)}}>edit</button>
     </li>))}

    </ul>
   </div>
  )
}
export default App