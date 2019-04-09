import React, { Component } from 'react'
import Carousel from './Carousel'
import TabContent from './TabContent'
import HomeTool from './HomeTool'
import HighlightBlog from './HighlightBlog'

import {getAllMovie} from './../../../Api/Movie/movieApi'

export default class Home extends Component {

constructor(props){
    super(props)

    this.state={
        nowShowingMovies:[],
        upComingMovies:[]
    }
}

getMovieData=()=>
{
    let result = []
    result = getAllMovie();
    if(result===undefined){
        return []
    }
    return result;
}


componentDidMount(){
   // this.getMovieData()
}
    render() {
       
        return (
            <div>
                {/* Slide1 */}
                {/* ./Assets/images/1200-X-628.jpg */}
               
                <Carousel/>
                    
               
                
                <HomeTool/>
                
                {/* Movie */}
                <section className="newproduct bgwhite p-t-45 p-b-105">
                    <div className="container">
                        <div className="sec-title p-b-60">
                            <h6 className="m-text5 t-center">
                                Phim Đang Chiếu </h6>
                        </div>
                      
                        <TabContent getAllMovie={this.getAllMovie}/>
                    </div>
                </section>
                <section className="newproduct bgwhite p-t-45 p-b-105">
                    <div className="container">
                        <div className="sec-title p-b-60">
                            <h6 className="m-text5 t-center">
                                Phim Sắp Chiếu
                             </h6>
                        </div>
                        <TabContent getAllMovie={this.getAllMovie}/>
                    </div>
                </section>


                {/* Blog */}
                <HighlightBlog/>
            </div>

        )
    }
}
