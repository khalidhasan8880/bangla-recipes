import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const logOutHandler=()=>{
        logOut().then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case font-extrabold text-2xl text-pr">Bangla Recipes</a>
            </div>
            <div className="hidden sm:flex ">
                <NavLink className={({ isActive }) => isActive ? 'text-pr font-semibold me-3' : 'me-3'} to='/'> Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-pr font-semibold me-3' : 'me-3'} to='/blog'> Blog</NavLink>
                <Tooltip id="my-tooltip" />
                <label data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL} alt='Profile Picture' />
                    </div>
                </label>
                
                {user ?  <Link onClick={logOutHandler} className='btn-custom'>Log out</Link> : <Link to="/login" className='btn-custom'>Log In</Link> }
            </div>

            <div className="dropdown dropdown-end sm:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'text-pr font-semibold me-3' : 'me-3'} to='/'> Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'text-pr font-semibold me-3' : 'me-3'} to='/blog'> Blog</NavLink>
                    </li>
                    <li>
                        {
                            user ?
                             <Link onClick={logOutHandler} className='btn-custom'>Log out</Link>
                            :
                            <Link to="/login" className='btn-custom'>Log In</Link> 
                        }
                    </li>
                </ul>
            </div>
          
        </div>
    );
};

export default Header;