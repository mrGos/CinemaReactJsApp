import React, { Component } from 'react'

import Carousel from './Carousel'
import TabContent from './TabContent'
import HomeTool from './HomeTool'
import Showtime from './../Showtime'
import HighlightBlog from './HighlightBlog'

import {getMoviesByCondition} from './../../../Api/Movie/movieApi'

export default class Home extends Component {

constructor(props){
    super(props)
   
    this.state={
        nowShowingMovies:[],
        upComingMovies:[]
    }

}

getMoviesByCondition=(statusType=1)=>
{   
    getMoviesByCondition(statusType).then(
        res=>{
            if(res===undefined){
                console.log('get Movies undefined')     
                return;   
            }
            if(statusType===1){
                this.setState({
                    nowShowingMovies:res 
                   })
            }else{
                this.setState({
                    upComingMovies:res 
                   })
            }
           
        }
    ).catch(console.log)
    
}

componentDidMount(){
 this.getMoviesByCondition(1)  
 this.getMoviesByCondition(2)
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
                      
                        <TabContent listMovies={this.state.nowShowingMovies}/>
                    </div>
                </section>
                <section className="newproduct bgwhite p-t-45 p-b-105">
                    <div className="container">
                        <div className="sec-title p-b-60">
                            <h6 className="m-text5 t-center">
                                Phim Sắp Chiếu
                             </h6>
                        </div>
                        <TabContent listMovies={this.state.upComingMovies}/>
                    </div>
                </section>

                <Showtime/>
                {/* Blog */}
                <HighlightBlog/>
            </div>

        )
    }
}
