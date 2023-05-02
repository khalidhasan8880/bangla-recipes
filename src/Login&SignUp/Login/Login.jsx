import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const loginHandler =(e)=>{
        e.preventDefault()
        const form = e.target

        const email = form.email.value
        const password = form.password.value
       console.log(email, password);
    }
    return (
        <div className='flex justify-center '>
            <form onSubmit={loginHandler} className='flex flex-col gap-y-3 border-solid border-2 border-pr p-11 rounded-lg sm:w-96'>
                <h3 className='text-2xl font-semibold text-pr'>Please Sign Up</h3>
                <input name='email' type="email" placeholder="Email" className="input input-bordered input-secondary w-full max-w-xs" />
                <input name='password' type="password" placeholder="Password" className="input input-bordered input-secondary w-full max-w-xs" />
                <button className='btn-custom' type='submit'>Register</button>
                <small>New to <span className='text-pr'>Bangla Recipes</span> website ? please <Link className='text-link' to='/sign-up'>Sign Up</Link></small>
                <small className='text-pr'>error messages</small>
            </form>
        </div>
    );
};

export default Login;