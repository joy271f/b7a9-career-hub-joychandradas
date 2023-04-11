import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import './FeaturedJobs.css'

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(() => {
        fetch('featuredJob.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, [])
    return (
        <>
            <div className='text-center mt-5'>
                <h3>Featured Jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='featuredJob-container'>
                {
                    featuredJobs.map(job => <FeaturedJob
                        key={job.id}
                        job={job}
                    ></FeaturedJob>)
                }
            </div>
        </>
    );
};

export default FeaturedJobs;