import React from 'react';
import Card from 'react-bootstrap/Card';
import './FeaturedJob.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeaturedJob = ({ job, handleDetailBtn }) => {
    const { id, jobTitle, companyName, companyLogo, remoteOrOnsite, fulltimeOrParttime, location, salary } = job;


    return (
        <div className='container single-job-card p-2'>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" className='w-50 p-3' src={companyLogo} />
                    <div className='ps-3'>
                        <h5>{jobTitle}</h5>
                        <p>{companyName}</p>
                        <span className='border border-primary p-1 rounded'>{remoteOrOnsite}</span>
                        <span className='ms-3 border border-primary p-1 rounded'>{fulltimeOrParttime}</span>
                        <div className="d-flex mt-3">
                            <p>{location}</p>
                            <p className='ps-5'>{salary}</p>
                        </div>
                        <Link to="/jobdetails"><Button onClick={() => handleDetailBtn(id)}>View Details</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FeaturedJob;