import React from 'react';

const ProfessionalBlog = () => {

    const blogs = [
        {name : 'BLOG DEFAULT', img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/blog-default.jpg'},
        {name : 'BLOG LIST', img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/blog-list.jpg'},
        {name : 'BLOG MASONRY', img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/blog-masonry.jpg'},
        {name : 'BLOG SIDEBAR', img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/blog-sidebar.jpg'},
    ]

    return (
        <div className='overflow-hidden'>
            <div className='container mt-4'>
                <h1>Professional Blog</h1>
                <h5>Show off your portfolio and blog posts using Helendo’s creative and stylish templates.</h5>
             </div>
             <div class="row row-cols-1 row-cols-md-4 p-md-5 g-5 mb-5 p-3 mt-5">
                {
                    blogs.map(card =>
                        <div class="col hover">
                            <div class="">
                                <img src={card.img} class="card-img-top border" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center mt-3 text-uppercase">{card.name}</h5>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ProfessionalBlog;