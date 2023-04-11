import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='d-flex justify-content-md-around align-items-center mt-4'>
            <div className='fw-bold fs-5'>
                <Link className='network' to="/">Network-Hub</Link>
            </div>
            <div>
                <Link className='network' to="/statistics">Statistics</Link>
                <Link className='network' to="/applied-jobs">Applied Jobs</Link>
                <Link className='network' to="/blog">Blog</Link>
            </div>
            <div>
                <Button variant='primary'>Star Applying</Button>
            </div>
        </div>
    );
};

export default Header;