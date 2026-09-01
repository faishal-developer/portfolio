import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from './portfolioData';

const SingleService = () => {
    const { serviceId } = useParams();
    const findData = data.find((v) => String(v.id) === String(serviceId));

    if (!findData) {
        return (
            <div className="container py-5 text-center">
                <h2>Project Not Found</h2>
                <Link to="/" className="btn btn-danger mt-3">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4">{findData.heading}</h2>
            <img className="w-100 rounded mb-4" src={findData.image} alt={findData.heading} style={{ maxHeight: '400px', objectFit: 'cover' }} />
            <p className="text-secondary">{findData.summary}</p>
            <Link to="/" className="btn btn-outline-danger1 mt-3">Back to Home</Link>
        </div>
    );
};

export default SingleService;
