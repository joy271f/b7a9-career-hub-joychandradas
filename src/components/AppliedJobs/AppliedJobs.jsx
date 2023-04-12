import React, { useEffect, useState } from 'react';
import { getJobs } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const getjob = Object.values(getJobs())
        setJobs(getjob)
    }, [])
    return (
        <div>
            {jobs.map(job =>
                <Card key={job.id} className='mt-5'>
                    <Card.Body>
                        <div className="d-flex">
                            <Card.Img variant="top" className='w-25' src={job.companyLogo} />
                            <div className='ps-3 m-auto'>
                                <h5>{job.jobTitle}</h5>
                                <p>{job.companyName}</p>
                                <span className='border border-primary p-1 rounded'>{job.remoteOrOnsite}</span>
                                <span className='ms-3 border border-primary p-1 rounded'>{job.fulltimeOrParttime}</span>
                                <div className="d-flex mt-3">
                                    <p>{job.location}</p>
                                    <p className='ps-5'><strong>Salary: </strong> {job.salary}</p>
                                </div>
                            </div>
                                <Link className='mt-5' to={`/jobdetails/${job.id}`}><Button>View Details</Button></Link>
                        </div>
                    </Card.Body>
                </Card>)}
        </div>
    );
};

export default AppliedJobs;