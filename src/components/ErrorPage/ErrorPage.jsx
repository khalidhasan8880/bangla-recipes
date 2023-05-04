import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='container mx-auto text-center'>
            <img className='mx-auto' src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7901.jpg" alt="" />
            <Link className='btn-custom' to="/">GO HOME</Link>
        </div>
    );
};

export default ErrorPage;