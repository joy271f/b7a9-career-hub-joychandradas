import React from 'react';
import './Homes.css'
import companyLogo from '../../assets/All_Images/man.png';
import JobCategory from '../JobCategory/JobCategory';

const Homes = () => {
    return (
        <>
        <div className='home-container mt-4 row ps-4'>
            <div className='home-text cols col-md-6'>
                <h3 className='home-title'>One Step <br /> Closer To Your <br /> <span className='title-span'>Dream Job</span></h3>
                <p className='home-description'>A successful interview depends on various factors, from what steps you take to prepare to how you conduct yourself in the meeting. You may have multiple rounds of interviews before receiving a job offer...</p>
                <botton className="btn btn-primary">Get Started</botton>
            </div>
            <div className='cols col-md-6'>
                <img className='home-image img-fluid w-75' src={companyLogo} alt=""></img>
            </div>
        </div>
        <JobCategory></JobCategory>
        </>
    );
};

export default Homes;