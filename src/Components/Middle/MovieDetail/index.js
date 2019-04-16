import React, { Component } from 'react'
import MovieDetailItem from './MovieDetailItem'
import Showtime from './../Showtime'

import {getMovieById} from './../../../Api/Movie/movieApi'

export default class MovieDetail extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           movieItem:{}
        }
      }

    setMovieItem = (id)=>{
        getMovieById(id)
        .then(res=>{
            this.setState({
                movieItem:res
            })
        })
        .catch(err=>console.log(err))
    }
    
    componentDidMount(){
        const {id}=this.props.match.params    
        this.setMovieItem(id)        
    }

    render() {
       
            const {id}=this.props.match.params 
        return (
            <div>
                <MovieDetailItem id={id} movieItem={this.state.movieItem}  setMovieItem={this.props.setMovieItem}/>
                <Showtime movieItem={this.state.movieItem}/>
            </div>
        )
    }
}
