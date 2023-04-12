import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FeaturedDetails = () => {
    const featuredDetails = useLoaderData();

    
    return (
        <div>
            {
                featuredDetails.map(details => 
                <div key={details.id}>
                    <p>{details.companyName}</p>
                </div>
                )
            }
        </div>
    );
};

export default FeaturedDetails;