import { useEffect, useState } from 'react'
import { useRef } from 'react'
import Todo from './components/Todo';
import './App.css'
import useAddTodo from './hooks/useAddTodo';
import { TodoTypes } from './types/types';
import useSetLocalStorage from './hooks/useSetLocalStorage';
function App() {
  const [todoArray, setTodoArray] = useState<TodoTypes[]>([]);
 const [inputText,setInputText] = useState<string>("")
  const todoInput = useRef<HTMLInputElement>(null);
 
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodoArray(JSON.parse(storedTodos));
    }
  }, []);
  return (
    <div className="app">
      <div className="input-container">
        <input ref={todoInput} value={inputText} onChange={(e)=>setInputText(e.target.value)} type="text" placeholder="Add Item" />
        <button className="button" onClick={() =>{
          useAddTodo({ value: todoInput.current?.value, setTodoArray })
          setInputText("")
        }}>Add</button>
        <button className="button rounded-md ml-3" onClick={() =>{
          setTodoArray([]);
          useSetLocalStorage([] as any)
        }}>clear</button>
      </div>

      {todoArray.map(todo => (
        <Todo todo={todo} setTodoArray={setTodoArray} />
      ))}
    </div>
  );


}


export default App
