import Header from './components/header/Header';
import './App.css';
import CreateTodo from './components/create-todo/CreateTodo';
import TodoItem from './components/todo-item/TodoItem';
import { useEffect, useState } from 'react';



function App() {
const [arr, setArr] = useState(JSON.parse(localStorage.getItem('todo')) || [])

useEffect(() => {
  console.log("State Arr is changed");
  localStorage.setItem("todo", JSON.stringify(arr))
}, [arr])

const result = arr.reduce((acc, item) => {
  return acc + Number(item.check)
}, 0)

const handleAddTodo = (newText) => {
  setArr([ ...arr, {text:newText, check: true, id: Date.now()}])
}

const handleDeleteTodo = (id) => {
  alert('delete from app')
  setArr([...arr].filter(t => t.id !== id))
}

const handleStatus = (id) => {
  const newArr = arr.map((item) => {
    if( item.id === id){
        return {...item, check: !item.check}  
    }
    return item 
  })
  setArr(newArr)
}

const handleEdit = (id, newText) => {
  const newArr = arr.map((item) => {
    if( item.id === id){
        return {...item, text: newText}  
    }
    return item 
  })
  setArr(newArr)
}

const todoLists = arr.map((item) => {
  return <TodoItem 
  handleDelete={handleDeleteTodo} 
  handleStatus={handleStatus} 
  handleEdit={handleEdit}
  id={item.id} 
  text={item.text} 
  check={item.check} />
 })

  return ( 
    <div className="App">
    <Header  length={arr.length} result={result}/>
    <div className='content'>
    <CreateTodo addNewTodo={handleAddTodo} />
    <div className='todos-wrapper'>
        {/* {TodoItem{text=m}} */}
        {todoLists.length 
        ? todoLists
        : <h1 className="watermark">Please add some Todo element</h1>}
    </div>
    </div>
    </div>
  );
}

export default App;
