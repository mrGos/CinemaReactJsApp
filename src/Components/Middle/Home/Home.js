import React, { Component } from 'react'

import Carousel from './Carousel'
import TabContent from './TabContent'
import HomeTool from './HomeTool'
import HighlightBlog from './HighlightBlog'

import { getMoviesByCondition, getMoviesByPaging } from './../../../Api/Movie/movieApi'

export default class Home extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            nowShowingPageResult: {
                Results: [],
                CurrentPage: 1,
                PageCount: 1,
                PageSize: 1,
                RowCount: 1
            },
            upCommingPageResult: {
                Results: [],
                CurrentPage: 1,
                PageCount: 1,
                PageSize: 1,
                RowCount: 1
            },
            nowShowingMovies: [],
            upComingMovies: [],
        }
    }

    //type  1: now, type 2: upcomming
    onNextMovie = (type) => {
     
        if (type === 1) {
            console.log('do next')
            let nextPage = this.state.nowShowingPageResult.CurrentPage + 1;
            if (nextPage > this.state.nowShowingPageResult.PageCount)  nextPage = 1;
            this.getMovieByPaging('', nextPage, this.state.nowShowingPageResult.PageSize, type)            
        } else if (type === 2) {
            let nextPage = this.state.upCommingPageResult.CurrentPage + 1;
            if (nextPage > this.state.upCommingPageResult.PageCount)  nextPage = 1;
            this.getMovieByPaging('', nextPage, this.state.upCommingPageResult.PageSize, type)       
        }
    }
    onPrevMovie = (type) => {
        console.log('do prev')
        if (type === 1) {
            let prevPage = this.state.nowShowingPageResult.CurrentPage - 1;
            if (prevPage > this.state.nowShowingPageResult.PageCount)  prevPage = 1;
            if(prevPage<=0) {
                type===1?prevPage = this.state.nowShowingPageResult.PageCount: prevPage =this.state.nowShowingPageResult.PageCount;
            }
            this.getMovieByPaging('', prevPage, this.state.nowShowingPageResult.PageSize, type)             
        } else if (type === 2) {
            let prevPage = this.state.upCommingPageResult.CurrentPage - 1;
            if (prevPage > this.state.upCommingPageResult.PageCount)  prevPage = 1;
            if(prevPage<=0) {
                type===1?prevPage = this.state.upCommingPageResult.PageCount: prevPage =this.state.upCommingPageResult.PageCount;
            }
            this.getMovieByPaging('', prevPage, this.state.nowShowingPageResult.PageSize, type)      
        }
    }

    getMovieByPaging = (keyword = "", page = 1, pageSize = 3, status = 12) => {
        getMoviesByPaging(keyword, page, pageSize, status)
            .then(res => {
                if (res === undefined) {
                    console.log('get Movies undefined')
                    return;
                }
                if (status === 1) {
                    this.setState({
                        nowShowingPageResult: res
                    }, () => {
                        //console.log(this.state.nowShowingPageResult)
                    })
                } else {
                    this.setState({
                        upCommingPageResult: res
                    }, () => {
                        //console.log(this.state.upCommingPageResult)
                    })
                }

            }
            ).catch(err=>console.log(err))
    }


    getMoviesByCondition = (statusType = 1) => {
        getMoviesByCondition(statusType).then(
            res => {
                if (res === undefined) {
                    console.log('get Movies undefined')
                    return;
                }
                if (statusType === 1) {
                    this.setState({
                        nowShowingMovies: res
                    })
                } else {
                    this.setState({
                        upComingMovies: res
                    })
                }

            }
        ).catch(console.log)

    }

    componentDidMount() {
        this.getMovieByPaging('', 1, 3, 1)
        this.getMovieByPaging('', 1, 3, 2)
        // this.getMoviesByCondition(1)
        // this.getMoviesByCondition(2)
    }

    render() {

        return (
            <div>
                {/* Slide1 */}
                {/* ./Assets/images/1200-X-628.jpg */}

                <Carousel />



                <HomeTool listMovies={this.state.nowShowingMovies} />

                {/* Movie */}
                
                <section className="newproduct bgwhite p-t-45 p-b-105">
                    <div className="container">
                        <div className="sec-title p-b-60">
                            <h6 className="m-text5 t-center">
                                Phim Đang Chiếu </h6>
                        </div>
                        <div className="btn left-button"  type="button"><i className="fa fa-chevron-left" onClick={this.onPrevMovie.bind(this,1)}></i></div>
                    <div className="btn right-button"  type="button"><i className="fa fa-chevron-right" onClick={ this.onNextMovie.bind(this,1)}></i></div>
                        {/* <TabContent listMovies={this.state.nowShowingMovies} setMovieItem={this.props.setMovieItem} /> */}
                        <TabContent listMovies={this.state.nowShowingPageResult.Results} setMovieItem={this.props.setMovieItem} 
                        onNextMovie={this.onNextMovie} onPrevMovie={this.onPrevMovie} typeMovie={1}/>
                    </div>
                </section>
                <section className="newproduct bgwhite p-t-45 p-b-105">
                    <div className="container">
                        <div className="sec-title p-b-60">
                            <h6 className="m-text5 t-center">
                                Phim Sắp Chiếu
                             </h6>
                        </div>
                        <div className="btn left-button"  type="button"><i className="fa fa-chevron-left" onClick={this.onPrevMovie.bind(this,2)}></i></div>
                    <div className="btn right-button"  type="button"><i className="fa fa-chevron-right" onClick={ this.onNextMovie.bind(this,2)}></i></div>
                        {/* <TabContent listMovies={this.state.upComingMovies} setMovieItem={this.props.setMovieItem} /> */}
                        <TabContent listMovies={this.state.upCommingPageResult.Results} setMovieItem={this.props.setMovieItem} 
                        onNextMovie={this.onNextMovie} onPrevMovie={this.onPrevMovie} typeMovie={2} />
                    </div>
                </section>

                {/* <Showtime/> */}
                {/* Blog */}
                <HighlightBlog />
            </div>

        )
    }
}
