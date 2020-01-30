import React from 'react';
import "./todolist.css";
import { useState } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';

let idPicker = Date.now();

export default function Todolist() {
    const [todos, setTodos] = useState([]);

    const addTodo = useCallback((todo) => {
        setTodos((todos) => [...todos, todo]);
    }, []);

    const removeTodo = useCallback((todo) => {
        
    }, []);

    const toggleTodo = useCallback((todo) => {

    }, []);

    return (
        <div>
            <Control 
                addTodo={addTodo}
            />
            <Todos 
                todos={todos}
            />
        </div>
    )
}

function Control(props) {
    const {addTodo} = props;
    const inputEl = useRef();

    const onClickBtn = useCallback((e) => {
        e.preventDefault();
        addTodo({
            id: ++idPicker,
            value: inputEl.current.value,
        });
        inputEl.current.value = '';
    }, []);

    return (
        <div className="control">
            <h1>todos</h1>
            <input 
                ref={inputEl}
                className="input-text"
                placeholder="what do you wanna add?"
            />
            <input 
                type="submit"
                className="add-item"
                onClick={onClickBtn}
            />
        </div>
    )
}

function TodoItem(props) {
    const {todoItem} = props;

    const [completed, setCompleted] = useState(false);

    const onClickCheckBox = useCallback(() => {
        setCompleted((completed) => !completed)
    });

    return (
        <li className={"todoItem " + (completed ? 'completed' : '')}>
            <input 
                type="checkbox"
                onClick={onClickCheckBox}
            />
            <span>{todoItem.value}</span>
            
        </li>
    )
}

function Todos(props) {
    const {todos} = props;

    return (
        <ul className="todos">
            {
                todos.map((item) => {
                    return (
                        <TodoItem 
                            key={item.id}
                            todoItem={item}
                        />
                    )
                })
            }
        </ul>
    )
}