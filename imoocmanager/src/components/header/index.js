import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import "./style.css";
import Utils from '../../utils/utils';

function Header() {
    const [userName, setUserName] = useState("Miles");
    const [sysTime, setSysTime] = useState();

    useEffect(() => {
        setInterval(() => {
            const sysTime = Utils.formatDate(new Date().getTime());
            setSysTime(sysTime);
        }, 1000);
    }, []);

    return (
        <div className="header">
            <Row className="header-top">
                <Col span={24} className="login">
                    <span>Welcome, {userName}</span>
                    <a href="#">Sign Out</a>
                </Col>
            </Row>
            <Row className="breadcrump">
                <Col span={4} className="breadcrump-title">
                    首页
                </Col>
                <Col span={20} className="weather">
                    <span className="date">{sysTime}</span>
                    <span className="weather-detail">晴转多云</span>
                </Col>
            </Row>
        </div>  
    );
}

export default Header;