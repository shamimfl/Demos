import React from 'react';

const ShopPage = () => {

    const ShopPage = [
        {name: 'SHOP 3 COLUMN' , img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/product-columns-3.jpg'},
        {name: 'SHOP 4 COLUMN' , img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/product-columns-4.jpg'},
        {name: 'SHOP 5 COLUMN' , img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/product-columns-5.jpg'},
        {name: 'SHOP 6 COLUMN' , img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/product-columns-6.jpg'},
        {name: 'SHOP CATEGORIES' , img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/product-categories.jpg'},
        {name: 'SHOP CAROUSEL' , img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/product-carousel.jpg'},
        {name: 'SHOP LEFT SIDEBAR' , img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/product-left-sidebar.jpg'},
        {name: 'SHOP RIGHT SIDEBAR' , img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/product-right-sidebar.jpg'},
    ]
    return (
        <div className='bg-light overflow-hidden pb-4'>
            <div className='container pt-5 '>
            <h1 className='font-bolder mt-4'>08 Beautiful Shop Page Layouts</h1>
            <p className=' mt-3 d-md-none'>With 08 layouts style like <strong>grid, category, carousel..etc.</strong> You can easy to customize for your shop page.</p>
            <p className='d-md-block d-none w-50 mt-3'>With 08 layouts style like <strong>grid, category, carousel..etc.</strong> You can easy to customize for your shop page.</p>
            </div>
            <div class="row row-cols-1 row-cols-md-4 p-md-5 g-5 mb-5 p-3">
                {
                    ShopPage.map(card =>
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

export default ShopPage;