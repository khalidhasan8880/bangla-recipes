import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaEdit } from 'react-icons/fa';

const Profile = () => {
    const { user } = useContext(AuthContext)
    const { displayName, email, photoURL } = user
    if (!user) {
        <div className='h-screen flex items-center justify-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    return (
        <div className='container flex justify-center mt-4 gap-x-9'>
            <div className="avatar">
                <div className="w-32 rounded-full">
                    <img src={photoURL} />
                </div>
            </div>
            <div className='flex flex-col gap-y-5 text-1xl font-semibold'>
                <h4>Name : {displayName}</h4>
                <h4>Email {email}</h4>
            </div>
            <h4 className='text-1xl text-pr'><FaEdit size={22}></FaEdit> Edit Profile coming soon...</h4>
        </div>
    );
};

export default Profile;