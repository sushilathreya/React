import classes from './Header.module.css';
import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    return <React.Fragment>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="React delicious food"/>
    </div>
    </React.Fragment>
}

export default Header;