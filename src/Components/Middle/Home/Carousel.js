import React, { Component } from 'react';
import CarouselItem from './CarouselItem'
const slides=[
    {img:"https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/h/e/hellboy-sneakshow_980-x-448.jpg",
     active:'active'   },
    {img:"https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/p/h/pht4_980-x-448_1.jpg",
    active:'' },
    {img:"https://s3img.vcdn.vn/123phim/2019/03/chung-nhan-hoan-hao-15537433196714.jpg",
    active:''}
]

class Carousel extends Component {
    render() {
        const ItemElement = slides.map((item,index)=>{
               return<CarouselItem 
               key={index}
               item={item}/>

        })
        return (
            <section className="sectionCarousel">
                <div id="carouselId" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselId" data-slide-to="1"></li>
                    <li data-target="#carouselId" data-slide-to="2"></li>
                </ol>
                    <div className="carousel-inner">
                        {/* <div className="carousel-item active">
                            <img className="d-block w-100" src="https://image.ibb.co/kvhXGH/jetty_1373173_1920.jpg" alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Title</h5>
                                <p>Text goes here</p>
                            </div>
                        </div> */}
                        
                      {ItemElement}
                    </div>
                    <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </section>
        );
    }
}

export default Carousel;

