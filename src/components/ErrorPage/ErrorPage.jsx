import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-5'>
            <h1>404</h1>
            <p className='bg-danger w-25 mx-auto p-3 fs-5 text-white rounded'>Please Try Again</p>
            <Link to="/"><p className='bg-danger w-25 mx-auto p-2 fs-5 text-white rounded'>Home Page</p></Link>
        </div>
    );
};

export default ErrorPage;