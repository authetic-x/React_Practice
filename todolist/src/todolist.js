import React from 'react';
import 'antd/dist/antd.css';
import TodolistUI from "./todolistUI"

import store from "./store"
import {getTodoList} from "./store/actionCreator"

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();

        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodolistUI 
                list={this.state.list}
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    componentDidMount() {
        const action = getTodoList();
        store.dispatch(action);
    }

    handleInputChange(e) {
        const action = {
            type: "change_input_value",
            value: e.target.value
        }
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick(e) {
        const action = {
            type: "add_todo_item",
            value: this.state.inputValue
        }
        console.log(arguments[0]);
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = {
            type: 'delete_todo_item',
            index
        }
        store.dispatch(action);
    }
}

export default Todolist