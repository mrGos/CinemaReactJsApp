import React, { Component } from 'react'
import Header from './Top/Header/Header'
import Footer from './Bottom/Footer/Footer'
import TrailerModal from './Modal/TrailerModal'

import Routes from './../Common/Routes'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          isShown: false,
          mItem:{}
        }
      }
    
      setHideModal = () => {
        this.setState({ isShown: false })
      }
      setMovieItem = (item) => {
        this.setState({ mItem: item, isShown: true })
      }     

    render() {
        return (
            <div className="">

                <Header /> 
                  
                <Routes setMovieItem={this.setMovieItem}
                        showTrailer={this.showTrailer}
                       />
                
                <Footer />
                <TrailerModal movieItem={this.state.mItem} isShown={this.state.isShown} setHideModal={this.setHideModal}/>
                
            </div>
        )
    }
}
