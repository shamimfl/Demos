import React from 'react';


const cards = [
    { name: 'HOME DEFAULT', img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/h1.jpg' },
    { name: 'HOME BOXED', img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/h2.jpg' },
    { name: 'Home carousel', img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/h3.jpg' },
    { name: 'HOME categories', img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/h4.jpg' },
    { name: 'HOME collection', img: 'https://reactdemo.hasthemes.com/helendo/assets/images/preview/h5.jpg' },
]

const PageLayouts = () => {
    return (
        <div className='overflow-hidden'>
            <div className='container p-3 pt-5 overflow-hidden'>
                <h1>5 Pre-built Layouts to Get Started</h1>
                <p>Helendo created many concepts with modern & minimal design, focus on product. You can easy to customize it for any store online</p>
            </div>
            <div class="row row-cols-1 row-cols-md-3 p-md-5 g-5 mb-5 p-3">
                {
                    cards.map(card =>
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
        </div >
    );
};

export default PageLayouts;