import React from 'react';
import propTypes from "prop-types"

class TodoItem extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content === this.props.content){
            return false;
        } else {
            return true;
        }
        
    }

    render() {
        return (
        <div onClick={this.props.handleOnclick}>{this.props.content}</div>
        );
    }
}

TodoItem.propTypes = {
    content: propTypes.string.isRequired
}

export default TodoItem;