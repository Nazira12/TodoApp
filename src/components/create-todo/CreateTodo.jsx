import { useState } from "react"
import "./CreateTodo.css"


const CreateTodo = (props) => {
   const [value, setValue] = useState("")

   const submit = (event) => {
      event.preventDefault()
      props.addNewTodo(value)
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

   