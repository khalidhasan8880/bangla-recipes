import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const registerHandler =(e)=>{
        e.preventDefault()
        const form = e.target

        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
       
    }
    return (
        <div className='flex justify-center '>
            <form onSubmit={registerHandler} className='flex flex-col gap-y-3 border-solid border-2 border-pr p-11 rounded-lg sm:w-96'>
                <h3 className='text-2xl font-semibold text-pr'>Please Sign Up</h3>
                <input name='name' type="text" placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs" />
                <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered input-secondary w-full max-w-xs" />
                <input name='email' type="email" placeholder="Email" className="input input-bordered input-secondary w-full max-w-xs" />
                <input name='password' type="password" placeholder="Password" className="input input-bordered input-secondary w-full max-w-xs" />
                <input name='confirmPassword' type="password" placeholder="Confirm Password" className="input input-bordered input-secondary w-full max-w-xs" />
                <button className='btn-custom' type='submit'>Register</button>
                <small>Already have account ? please <Link className='text-link' to='/login'>Login Here</Link></small>
                <p className='text-pr'>error messages</p>
            </form>
        </div>
    );
};

export default SignUp;