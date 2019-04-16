import React, { Component } from 'react'
import { getMovieById } from './../../../Api/Movie/movieApi'
export default class MovieDetailItem extends Component {

    movieOnClick=(item)=>{
        this.props.setMovieItem(item)
    }
    render() {
        let item =this.props.movieItem
        let { Name, Id, Image, TimeSpan, Rating, ReleasedDate, Director, Cast, Category, Format, Nation, Description } = item

        let baseDate = (new Date(ReleasedDate));
        let dd = String(baseDate.getDate()).padStart(2, '0');
        let mm = String(baseDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = baseDate.getFullYear();

        let dateRelease = dd + '.' + mm + '.' + yyyy;
        //console.log(this.props)

        return (

            <section className="cinema-details bg-overlay bg-img section-padding-80-0 jarallax" style={{ backgroundImage: 'url(./Assets/images/hinh-nen-hoa-cuc-trang-dep_112139403.jpg)' }}>
                < div className="container">
                    <div className="row align-items-center">
                        {/* Thumbnail */}
                        <div className="col-12 col-md-6">
                            <div className="cinema-details-thumbnail mb-80">
                                <a href="/">
                                    <img src={Image} alt="NoImage" id="imgdetails" width={300} height={600} />
                                </a>
                                
                                   
                                        {/* Button */}
                                        <button className=" overlay circlePlay bg4 bo-rad-100 hov1 s-text0 trans-0-4 " 
                                            data-toggle="modal" 
                                            data-target="#movieModal"
                                            onClick={this.movieOnClick.bind(this,(item))}
                                        >
                                            Trailer
                                         </button>
                                    
                                
                            </div>
                        </div>
                        {/* Content */}
                        <div className="col-12 col-md-6">
                            <div className="cinema-details-content mb-80" id="contentdetails">
                                <div className="cinema-name">
                                    {Name}
                                </div>
                                <div className="cinema-length">
                                    {TimeSpan}
                                </div>
                                <div className="">
                                    <button className="btn" id="btnTicketDetail">MUA VÉ </button>
                                </div>
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <div id="info-movie">
                                    <div className="movie-date">
                                        Ngày phát hành: {dateRelease}
                                    </div>
                                    <div className="movie-director">
                                        Đạo Diễn: {Director}
                                    </div>
                                    <div className="movie-actor">
                                        Diễn Viên: {Cast}
                                    </div>
                                    <div className="movie-type">
                                        Thể loại: {Category}
                                    </div>
                                    <div className="movie-format">
                                        Định Dạng: {Format}
                                    </div>
                                    <div className="movie-nation">
                                        Quốc Gia Sản Xuất: {Nation}
                                    </div>
                                    <div className="movie-content">
                                        Nội dung: {Description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
