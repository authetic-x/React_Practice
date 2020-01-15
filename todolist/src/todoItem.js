import React from 'react';

class TodoItem extends React.Component {
    render() {
        return (
        <div onClick={this.props.handleOnclick}>{this.props.content}</div>
        );
    }
}

export default TodoItem;