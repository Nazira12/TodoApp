import Header from './components/header/Header';
import './App.css';
import CreateTodo from './components/create-todo/CreateTodo';
import TodoItem from './components/todo-item/TodoItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';



function App() {

const arr = useSelector((state) => state.todo.data)

const result = arr.reduce((acc, item) => {
  return acc + Number(item.check)
}, 0)

const todoLists = arr.map((item) => {
  return <TodoItem 
  key={item.id}
  id={item.id} 
  text={item.text} 
  check={item.check} />
 })

  return ( 
    <div className="App">
    <Header  length={arr.length} result={result}/>
    <div className='content'>
    <CreateTodo />
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
