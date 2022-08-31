import React from 'react';



const Store = () => {
    window.onscroll = () => {

        const iconContainer = document.getElementById('iconContainer');
        const navbar = document.getElementById('nav');

        if (window.scrollY > 500) {
            iconContainer.classList.add('active')
            navbar.classList.remove('header')
            navbar.style.backgroundColor = 'white'
            
        } else if(window.scrollY > 0){
            iconContainer.classList.remove('active')
            navbar.classList.add('header')
        }
    }
    return (
        <div className='bg-light'>
            <div className='bg pt-5 container pt-5 p-3'>
                <h1 className='mb-5 mt-5 d-md-none fw-bold'>Create your store online.withHelendo now!</h1>
                <h1 className='mb-5 mt-5 d-md-block d-none w-50 fw-bold'>Create your store online.withHelendo now!</h1>
                <p className='mt-4 mb-5'>Beautifully designed, powerful, and easy to customize.Helendo the best template for store online.</p>
                <button className='purchase-btn '>Purchase Helendo $24</button>
                <p className='mt'>© 2022 by Hastheme</p>
            </div>
            <a href='#'  className='iconContainer text-decoration-none' id='iconContainer'>
                <svg className='icon' id='icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
            </a>

        </div>
    );
};

export default Store;