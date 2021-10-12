import React, { useState } from 'react';
import './MainComponent.css'

export const MainComponent:React.FC = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState(localStorage.getItem('todos')?.split(','));


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem('todos', localStorage.getItem('todos') + ',' + todo);
        setTodo("");
        setTodos(localStorage.getItem('todos')?.split(','));
    }

    const deleteTodo = (one: typeof todo) => {
        let remain = localStorage.getItem('todos')?.split(',').filter((todo) => todo !== one);
        let remain_str = remain?.join(',');
        localStorage.setItem('todos', String(remain_str));
        setTodos(remain);
    }

    const update = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }
    return (
        <div>
            <h1>This is Todo App!</h1>
            <form onSubmit={handleSubmit}>
                <input required type="text" value={todo} onChange={update} placeholder="Enter any task." />
                <button type="submit">Add</button>
            </form>
            {todos?.map((one, index) => {
                return <h1 onClick={() => deleteTodo(one)} key={index}>{one}</h1>
            })}
        </div>
    )
}
