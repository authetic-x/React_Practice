import React, {Fragment} from 'react';
import {CSSTransition} from "react-transition-group"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return(
            <Fragment>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames="fade"
                >
                    <div>Hello</div>
                </CSSTransition>
                <button onClick={this.handleClick}>Toggle</button>
            </Fragment>
        )
    }

    handleClick(e) {
        this.setState({
            show: !this.state.show
        });
    }
}

export default App;