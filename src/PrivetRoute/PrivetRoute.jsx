import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const location = useLocation()
    const {user} = useContext(AuthContext)
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{from: location}}></Navigate>
};

export default PrivetRoute;