import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {FaGithub, FaGoogle} from 'react-icons/fa'
const Login = () => {
    // hooks
    const {logIn, continueWithGoogle, continueWithGitHub} = useContext(AuthContext)
    const navigate = useNavigate()
    const [error , setError] = useState('')
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';
    // handler
    const loginHandler = (e) => {

        e.preventDefault()
        const form = e.target
        setError('')
        const email = form.email.value
        const password = form.password.value
        logIn(email,password).then(res=>{
            console.log(res.user);
            navigate(from)

        }).catch(err=>{
            console.log(err);
           
        })
        form.reset()
    }
    const googleLoginHandler= ()  =>{
        continueWithGoogle().then(res=>{
            console.log(res);
            navigate(from)
        }).catch(err=>{
            setError(err.message)
        })
    }
    const gitHubLoginHandler= ()  =>{
        continueWithGitHub().then(res=>{
            console.log(res);
            navigate(from)
        }).catch(err=>{
            setError(err.message)
        })
    }
    return (
        <div className='flex justify-center '>
            <form onSubmit={loginHandler} className='flex flex-col gap-y-3 border-solid border-2 border-pr p-11 rounded-lg sm:w-96'>
                <h3 className='text-2xl font-semibold text-pr'>Please Sign Up</h3>
                <input name='email' type="email" placeholder="Email" className="input input-bordered input-secondary w-full max-w-xs" />
                <input name='password' type="password" placeholder="Password" className="input input-bordered input-secondary w-full max-w-xs" />
                <button onClick={loginHandler} className='btn-custom' type='submit'>Log in</button>
                <div className='flex justify-evenly'>
                    <button onClick={googleLoginHandler} className='hover:text-pr' > <FaGoogle size={44}></FaGoogle></button>
                    <button onClick={gitHubLoginHandler} className='hover:text-pr' > <FaGithub size={44}></FaGithub></button>
                </div>
                <small>New to <span className='text-pr'>Bangla Recipes</span> website ? please <Link className='text-link' to='/sign-up'>Sign Up</Link></small>

                <small className='text-pr'>{error}</small>
            </form>
        </div>
    );
};

export default Login;