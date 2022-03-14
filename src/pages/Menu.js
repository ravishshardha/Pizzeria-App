import React, { Component } from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css'

const Menu = () => {
    return ( 
        <div className='menu'>
            <h1 className='menuTitle'>The Menu</h1>
            <div className='menuList'>
                {MenuList.map((menuItem,key) => {
                    return (
                        <MenuItem image={menuItem.image} name={menuItem.name} price={menuItem.price} key={key} />
                    )
                })}
            </div>
        </div>
     );
}
 
export default Menu;