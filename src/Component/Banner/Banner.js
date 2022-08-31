import React from 'react';
// import Header from '../Header/Header';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <section className='banner-container container'>
                <h1 className='banner-title'>Helendo</h1>
                {/* <h1 className=''>Helendo</h1> */}
                <p className='banner-text'>React eCommerce Template</p>
            </section>
        </div>
    );
};

export default Banner;