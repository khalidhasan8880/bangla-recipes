import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-gray-900 flex gap-y-7 flex-col sm:flex-row flex-wrap justify-between mt-40 px-3 sm:px-24 py-44 text-pr font-bold'>
            <div>
                <h3 className='text-3xl my-4'>Contact :</h3>
                <p>Email: khalidhasan8880@gmail.com</p>
                <p>Phone : 01619167602</p>
                <p>Phone : Faridpur, Dhaka, Bangladesh</p>
            </div>
            <div>
                <h3 className='text-3xl my-4'>Follow Us : </h3>
                <div className='flex gap-x-3'>
                    <FaFacebook size={44}></FaFacebook>
                    <FaTwitter size={44}></FaTwitter>
                    <FaInstagram size={44}></FaInstagram>
                    <FaTiktok size={44}></FaTiktok>
                </div>
            </div>
            <div>
                <h3 className='text-3xl my-4'>Subscribe For Updates</h3>
                <input name='email' type="email" placeholder="Email" className="input input-secondary w-full" />
                <button className='btn-custom mt-2 w-full h-12 rounded-full'>Subscribe</button>
            </div>
        </div>
    );
};

export default Footer;