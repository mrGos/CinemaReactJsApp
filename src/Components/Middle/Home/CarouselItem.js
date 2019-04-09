import React from 'react';

const CarouselItem = (params) => {   
    return (
        <div className={`carousel-item  ${params.item.active}`}  >
        <img className="d-block w-100" src={params.item.img} alt="Second slide" />
        <div className="carousel-caption d-none d-md-block">
            {/* <h5>Title</h5>
            <p>Text goes here</p> */}
        </div>
    </div>
    );
};

export default CarouselItem;