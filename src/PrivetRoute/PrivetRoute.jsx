import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)
    if (loading) {
        return <div className='h-screen flex items-center justify-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;