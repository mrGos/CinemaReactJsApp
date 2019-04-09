import React, { Component } from 'react'

export default class HomeTool extends Component {
    render() {
        return (
            <section className="section mt-5 bg-light pb-0">
                <div className="container">
                    <div className="row check-availabilty" id="next">
                        <div className="block-32" data-aos="fade-up" data-aos-offset={-200}>
                            <form action="/">
                                <div className="row">
                                    <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                                        <label htmlFor="movie" className="font-weight-bold text-black">Phim</label>
                                        <div className="field-icon-wrap">
                                            <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                            <select name="movie" id="movie" className="form-control">
                                                <option value>Shazam!(C13)</option>
                                                <option value>Chị Mười Ba (C18)</option>
                                                <option value>Chú Voi Biết Bay - Dumbo</option>
                                                <option value>Yêu Nhầm Bạn Thân - FriendZone (C16)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                                        <label htmlFor="rap" className="font-weight-bold text-black">Rạp</label>
                                        <div className="field-icon-wrap">
                                            <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                            <select name="theater" id="theater" className="form-control">
                                                <option value>BHD Star Bitexco</option>
                                                <option value>Galaxy - Nguyễn Du</option>
                                                <option value>Galaxy - Quang Trung</option>
                                                <option value>Lotte Cinema Cộng Hòa</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3 mb-md-0 col-lg-3">
                                        <div className="row">
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <label htmlFor="date" className="font-weight-bold text-black">Ngày Xem</label>
                                                <div className="field-icon-wrap">
                                                    <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                    <select name="date" id="date" className="form-control">
                                                        <option value>Hôm nay (8/4)</option>
                                                        <option value>9/4</option>
                                                        <option value>10/4</option>
                                                        <option value>11/4</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <label htmlFor="showtime" className="font-weight-bold text-black">Suất Chiếu</label>
                                                <div className="field-icon-wrap">
                                                    <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                    <select name="showtime" id="showtime" className="form-control">
                                                        <option value>10:30</option>
                                                        <option value>11:45</option>
                                                        <option value>12:15</option>
                                                        <option value>13:45</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 align-self-end">
                                        <button className="btn btn-primary btn-block text-white">MUA VÉ NGAY</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
