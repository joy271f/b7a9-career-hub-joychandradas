import React from 'react';
import Card from 'react-bootstrap/Card';
import './FeaturedJob.css'
import { Button } from 'react-bootstrap';

const FeaturedJob = ({ job }) => {
    const { jobTitle, companyName, companyLogo, remoteOrOnsite, location, salary } = job;
    return (
        <div className='container single-job-card p-2'>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" className='w-50 p-3' src={companyLogo} />
                    <div className='ps-3'>
                        <h5>{jobTitle}</h5>
                        <p>{companyName}</p>
                        <p className='fw-bold'>{remoteOrOnsite}</p>
                        <div className="d-flex">
                            <p>{location}</p>
                            <p className='ps-5'>{salary}</p>
                        </div>
                        <Button>View Details</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FeaturedJob;