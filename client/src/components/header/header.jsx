import { Outlet,Link } from 'react-router-dom';

import './header.css';

import { Fragment } from 'react';
export function Header(){
    return(
        <Fragment>
            <div className="header-container">
                <div className="logo-container">
                    <Link to='/'>/</Link>
                </div>
                <div className="other-heading">
                    <Link>/job</Link>
                    <Link>/profile</Link>
                    <Link to='/sign-in'>Sign In </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}