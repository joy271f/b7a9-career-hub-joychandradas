import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const FeaturedDetails = () => {
    const [details, setDetails] = useState({});
    const jobs = useLoaderData();
    const { detailsId } = useParams();


    useEffect(() => {
        if (jobs) {
            setDetails(jobs.find(job => job.id == detailsId))
        }
    }, [jobs])

    return (
        <div className='row mt-5'>
            <div className='cols col-md-6'>
                <p><strong>Job Description:</strong> {details.jobDescription}</p> <br />
                <p><strong>Job Responsibility:</strong> {details.jobResponsibility}</p> <br />
                <p><strong>Educational Requirements:</strong> {details.Requirements}</p> <br />
                <p><strong>Experiences:</strong> {details.experiences}</p>
            </div>
            <div className='cols col-md-6'>
                <Card
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>Job Details</Card.Header>
                    <Card.Body>
                        <p><strong>Salary: </strong>{details.salary}</p>
                        <p><strong>Job Title: </strong>{details.jobTitle}</p>
                        <h6 className='mt-4'><strong>Contact Information</strong></h6>
                        <p className='mt-3'><strong>Email: </strong>{details.email}</p>
                        <p className='mt-3'><strong>Address: </strong>{details.address}</p>
                        <p className='mt-3'><strong>Phone: </strong>{details.phone}</p>
                    </Card.Body>
                </Card>
            </div>
        </div >
    );
};

export default FeaturedDetails;