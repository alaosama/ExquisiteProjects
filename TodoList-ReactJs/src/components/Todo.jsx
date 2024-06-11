import React, { useState, useRef, useEffect } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

    const [todoList, setTodoList] = useState([]); // [task1, task2, task3, ... 

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim(); //trim bach thyed lik space ila ktebti 
        
        if(inputText === "") {
            return null;
        }

        const newTodo = {
            id: Date.now(),
            task: inputText,
            isCompleted: false,
        }
        setTodoList((prev)=> [...prev, newTodo]);
        inputRef.current.value = "";
    }

    const deleteTodo = (id) => {
        setTodoList((prvTodos) => {
           return prvTodos.filter((todo) => todo.id !== id)
        })
    }

    const toggle = (id) => {
        setTodoList((prevTodos)=>{
            return prevTodos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, isCompleted: !todo.isCompleted}
                }
                return todo;
            })
        })
    }

    useEffect(() => {
        const data = localStorage.getItem('todoList');
        if(data) {
            setTodoList(JSON.parse(data));
        }
    }, [todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col
    p-7 min-h-[550px] rounded-x1'>
      
      {/* Title */}

      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt="" />
        <h1 className='text-3xl font-bold text-gray-800'>To-Do List</h1>
      </div>

        {/* Input */}
        
        <div className='flex items-center mt-7 bg-gray-200 rounded-full'>
            <input
                ref={inputRef}
                type='text'
                placeholder='Add your task'
                className=' bg-transparent border-0 outline-none flex-1 h-14
                pl-6 pr-2 placeholder:text-slate-600'
            />
            <button onClick={add} 
            className='border-none rounded-full bg-yellow-500 w-32 h-14 text-white text-lg
            font-medium cursor-pointer'>
                ADD +
            </button>
        </div>

            
        {/* Todo list  */}
        <div>
            {todoList.map((item, index) => {
                return <TodoItems key={index} task={item.task} id={item.id} 
                isCompleted={item.isCompleted} deleteTodo={deleteTodo}
                toggle={toggle} />
            })}
        </div>


    </div>
  )
}

export default Todo
