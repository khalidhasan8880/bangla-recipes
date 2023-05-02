import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-2xl text-pr">Bangla Recipes</a>
            </div>
            <div className="flex-none">
                <NavLink className={({ isActive }) => isActive ? 'text-pr font-semibold me-3' : 'me-3'} to='/'> Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-pr font-semibold me-3' : 'me-3'}  to='/blog'> Blog</NavLink>

                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs" />
                    </div>
                </label>
                <button className='px-4 py-2 bg-pr text-white font-semibold ms-3'>Log In</button>
            </div>
        </div>
    );
};

export default Header;