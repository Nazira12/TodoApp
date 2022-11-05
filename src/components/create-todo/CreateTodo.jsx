import { useState } from "react"
import { useDispatch } from "react-redux"
import { todoSliceActions } from "../../state/todoSlice"
import "./CreateTodo.css"


const CreateTodo = () => {
   const [value, setValue] = useState("")
   const dispatch = useDispatch()

   const submit = (event) => {
      event.preventDefault()
      dispatch( todoSliceActions.addTodo(value) )
      setValue("")
   }

   const handleChange = (event) =>{
      console.log(event)
      setValue(event.target.value)
   }

    return(
       (
       <form onSubmit={submit} className="wrapper">
       <input onChange={handleChange} 
       type="text" 
       placeholder="Enter todo"
       autoFocus
       />
       <button>+Create</button>
       </form>)
    )
   }

   export default CreateTodo

   