import React, {Fragment} from 'react';
import "./style.css"
import TodoItem from "./todoItem.js"

import axios from "axios";

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['hello']
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleBtnChange() {
        this.setState((preState) => ({
            inputValue: '',
            list: [...preState.list, preState.inputValue]
        }));
    }

    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        });
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            /* return <li key={index}
                       onClick={this.handleItemDelete.bind(this, index)}
                   >
                        {item}
                   </li> */
                return <TodoItem content={item}
                                 handleOnclick={this.handleItemDelete.bind(this, index)}
                       />
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    {
                        // comments 需单独一行
                    }
                    <label for="insertArea">Input: </label>
                    <input 
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={(e) => this.handleBtnChange(e)}>Submit</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        );
    }

    componentDidMount() {
        axios.get("/api/todolist")
            .then(() => {alert("success")})
            .catch(() => {alert("error")});
    }
}

export default Todolist;