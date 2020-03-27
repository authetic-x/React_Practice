import React, { useState, useEffect } from 'react';
import MenuConfig from '../../config/menuConfig';
import { Menu } from 'antd';
import './style.css';

const { SubMenu } = Menu;

function Nav() {
    const [menuItems, setMenuItems] = useState([]);

    const renderMenuItems = (items) => {
        return items.map((item) => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.key}
                        title={<span>{item.title}</span>}
                    >
                        {renderMenuItems(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        })
    }

    useEffect(() => {
        setMenuItems(renderMenuItems(MenuConfig));
    }, []);

    return (
        <div>
            <div className="logo">
                <img src="/assets/logo-ant.svg" alt="logo"/>
                <h1>Imooc MS</h1>
            </div>      
            <Menu
                theme="dark"
            >
                {menuItems}
            </Menu>
        </div>
    );
}

export default Nav;