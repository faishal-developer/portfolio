import React from 'react';
import data from './portfolioData';

const MyPortfolio = () => {
    return (
        <div className='portfolio text-center my-5 py-5'>
            <h6 className="pink-color">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h6>
            <h1>My Portfolio</h1>
            <div className="container">
                <div className="row row-cols-1 g-5 row-cols-md-2 row-cols-lg-3">
                    {
                        data.map( ( item, i ) => (
                            <div className="col">
                                <a style={{ textDecoration: 'none', color: '#1E1E1E' }} href={item.link} target="_blank" rel="noreferrer">
                                    <div className="card">
                                        <img src={item.image} className="card-img-top" alt="portfolio" />
                                        <div className="card-body">
                                            <p className="pink-color">{item.category}</p>
                                            <h2>{item.heading}</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;

