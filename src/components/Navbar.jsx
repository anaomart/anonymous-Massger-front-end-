import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import useLogout from '../hooks/useLogout';
const Navbar = () => {
    const {user} = useAuthContext();
    const {logout} = useLogout();
    const handleClick = () => logout();

    return (
        <nav className='navbar'>
            <h2 className='siteName'><Link to='/'>Anonymous Massager</Link></h2>
            <ul>
                {
                    user ? <>
                        <li className='btn'><Link to='/'>{user.username}</Link></li>
                        <li className='btn' onClick={handleClick}><Link href='/#'>Logout</Link></li>
                    </> : <>
                        <li className='btn'><Link to='/login'>Login</Link></li>
                        <li className='btn'><Link to='/signup'>signup</Link></li>
                    </>
                }


            </ul>
        </nav>
    );
}

export default Navbar;
