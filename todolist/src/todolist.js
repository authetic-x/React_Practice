import React, { useCallback } from 'react';
import "./todo.css";
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

let idSeq = Date.now();

function Control(props) {
    const {addTodo} = props;
    const inputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const newText = inputRef.current.value.trim();
        if (newText.length !== 0) {
            addTodo({
                id: ++idSeq,
                text: newText,
                complete: false,
            });
        }
        inputRef.current.value = '';
    }

    return (
        <div className="control">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input 
                    ref={inputRef}
                    type="text"
                    className="new-todo"
                    placeholder="what needs to be done?"
                />
            </form>
        </div>
    );
}

function TodoItem(props) {
    const {todo, removeTodo, toggleTodo} = props;
    const {id, text, complete} = todo;

    const onChange = () => {
        toggleTodo(id);
    }

    const onRemove = () => {
        removeTodo(id);
    }

    return (
        <li
            className="todo-item"
        >
            <input 
                type="checkbox"
                onChange={onChange}
                checked={complete}
            />
            <label className={complete ? 'complete' : ''}>{text}</label>
            <button onClick={onRemove}>&#xd7;</button>
        </li>
    )
}

function Todos(props) {
    const {todos, removeTodo, toggleTodo} = props;



    return (
        <ul className="todos">
            {
                todos.map((todo) => {
                    return (
                        <TodoItem 
                            key={todo.id}
                            todo={todo}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                        />
                    )
                })
            }
        </ul>
    );
}

const LS_KEY = '_$_LIST';

export default function Todolist() {
    const [todos, setTodos] = useState([]);

    const addTodo = useCallback((todo) => {
        setTodos(todos => [...todos, todo]);
    }, []);

    const removeTodo = useCallback((id) => {
        setTodos(todos => todos.filter(todo => {
            return todo.id !== id
        }));
    }, []);

    const toggleTodo = useCallback((id) => {
        setTodos(todos => todos.map(todo => {
            return todo.id === id
                    ? {
                        ...todo,
                        complete: !todo.complete
                    } : todo;
        }));
    }, []);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem(LS_KEY)) || [];
        setTodos(todos);
    }, []);

    useEffect(() => {
        localStorage.setItem(LS_KEY, JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="todo-list">
            <Control 
                addTodo={addTodo}
            />
            <Todos 
                todos={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    );
}