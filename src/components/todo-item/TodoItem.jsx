import { useState } from 'react'
import css from './TodoItem.module.css'

const TodoItem = (props) => {
  const [isInputShow, setInputShow] = useState(false)
  const [inputValue, setInputValue] = useState(props.text)

  const onDelete = () => {
   props.handleDelete(props.id)
  }
 
  const onEdit =() => {
  setInputShow(!isInputShow)   
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    props.handleEdit(props.id, inputValue)
    setInputShow(false)
  }

    return(
       <div className={css.wrapper}>
        {isInputShow ? (
          <form onSubmit={submit}>
          <input autoFocus onChange={handleInputChange} value={inputValue} type="text" placeholder='Todo' />
          <button>Save</button>
          </form>
        ) : (<label>
       <input type="checkbox" onChange={() => props.handleStatus(props.id)} checked={props.check}   />
         <span className={props.check === true ?  css.text : ""}>
          {props.text}</span>
       </label>)}
       <div>
        <button style={{background: "green"}} onClick={onEdit}>Edit</button>
        <button style={{background: "red"}} onClick={onDelete}>Delete</button>
       </div>
       </div>
    )
   }

   export default TodoItem

