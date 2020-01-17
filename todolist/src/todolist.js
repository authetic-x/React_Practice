import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

import store from "./store"

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();

        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        // this.handleItemClick = this.handleItemClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <div style={{marginTop: 10, marginLeft: 10}}>
                <div>
                    <Input 
                        value={this.state.inputValue}
                        placeholder="Basic usage" 
                        style={{width: 300, marginRight: 10 }}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>Submit</Button>
                </div>
                <List
                    style={{marginTop: 10, width: 300}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item
                            onClick={this.handleItemDelete.bind(this, index)}
                        >
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
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