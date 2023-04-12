import React from 'react';
import './Homes.css'
import companyLogo from '/assets/All_Images/man.png';
import { useLoaderData } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Homes = () => {
    const jobs = useLoaderData();
    return (
        <>
            <div className='home-container mt-4 row ps-4'>
                <div className='home-text cols col-md-6'>
                    <h3 className='home-title'>One Step <br /> Closer To Your <br /> <span className='title-span'>Dream Job</span></h3>
                    <p className='home-description'>A successful interview depends on various factors, from what steps you take to prepare to how you conduct yourself in the meeting. You may have multiple rounds of interviews before receiving a job offer...</p>
                    <Button className="btn btn-primary">Get Started</Button>
                </div>
                <div className='cols col-md-6'>
                    <img className='home-image img-fluid w-75' src={companyLogo} alt=""></img>
                </div>
            </div>
            <div className='mt-5 text-center'>
                <h3>Job Category List</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='d-md-flex p-5 gap-5'>
                {
                    jobs.map(job =>
                        <Card key={job.id} className='my-2' style={{ width: '18rem' }}>
                            <Card.Img variant="top" className='w-25 p-3' src={job.logo} />
                            <Card.Body>
                                <Card.Title>{job.name}</Card.Title>
                                <Card.Text>{job.jobAvailable}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
            <FeaturedJobs></FeaturedJobs>
        </>
    );
};

export default Homes;