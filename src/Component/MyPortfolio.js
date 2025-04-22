import React from 'react';
import { Link } from 'react-router-dom';
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
                            <div key={i} className="col">
                                <div  className="card">
                                    <figure   className="c4-izmir c4-border-ccc-3">
                                        <img style={{height:"310px"}}  src={item.image} alt="Sample" />
                                        <figcaption>
                                            <div className="c4-reveal-up">
                                                <h6 className='text-light fw-bold'>
                                                    {item.heading}<br /><br />
                                                    <a className='text-light' href={item.link} target='_blank' rel="noreferrer">Live Project </a><br />
                                                    <a className='text-light' href={item.link2} target='_blank' rel="noreferrer">Client Side Code </a><br />
                                                    {item.link3 && <a className='text-light' href={item.link3} target='_blank' rel="noreferrer">Server Side Code </a>}
                                                </h6>

                                            </div>
                                            {/* <div className="c4-reveal-up">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                                                    </p>
                                                </div> */}
                                        </figcaption>
                                    </figure>
                                    {/* <div className="card-body">
                                            <p className="pink-color">{item.category}</p>
                                            <h2>{item.heading}</h2>
                                        </div> */}
                                </div>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;

