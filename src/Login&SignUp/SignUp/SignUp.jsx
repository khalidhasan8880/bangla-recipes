import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const [error , setError] = useState('')
    const {createUser, updateInformation} = useContext(AuthContext)
    const navigate = useNavigate()
    const registerHandler =(e)=>{
        e.preventDefault()

        setError('')


        const form = e.target

        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
       
        if (password !== confirmPassword) {
            setError('password does not match !!')
            return
        }
        if (password.length < 6) {
            setError('password must be 6 character or more !!')
            return
        }

        createUser(email,password).then((result)=>{
            updateInformation(name, photo)
            console.log(result.user);
            navigate('/')

        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className='flex justify-center '>
            <form onSubmit={registerHandler} className='flex flex-col gap-y-3 border-solid border-2 border-pr p-11 rounded-lg sm:w-96'>
                <h3 className='text-2xl font-semibold text-pr'>Please Sign Up</h3>
                <input required name='name' type="text" placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs" />
                <input required name='photo' type="text" placeholder="Photo URL" className="input input-bordered input-secondary w-full max-w-xs" />
                <input required name='email' type="email" placeholder="Email" className="input input-bordered input-secondary w-full max-w-xs" />
                <input required name='password' type="password" placeholder="Password" className="input input-bordered input-secondary w-full max-w-xs" />
                <input name='confirmPassword' type="password" placeholder="Confirm Password" className="input input-bordered input-secondary w-full max-w-xs" />
                <button className='btn-custom' type='submit'>Register</button>
                <small>Already have account ? please <Link className='text-link' to='/login'>Login Here</Link></small>
                <p className='text-pr'>{error}</p>
            </form>
        </div>
    );
};

export default SignUp;