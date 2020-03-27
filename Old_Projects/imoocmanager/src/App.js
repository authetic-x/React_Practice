import React from 'react';
import './App.css';
import {Row, Col} from 'antd';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Nav from './components/navleft';
import "antd/dist/antd.css";
import './style/common.less';

function App() {
    return (
        <Row className="container">
            <Col span={3} className="nav-left">
                <Nav />
            </Col>
            <Col span={21} className="main">
                <Header />
                <Row className="content">
                    Content
                </Row>
                <Footer />
            </Col>
        </Row>
    )
}

export default App;
