import React, { Component } from 'react'
import Header from './Top/Header/Header'
import Footer from './Bottom/Footer/Footer'
import Home from './Middle/Home/Home'

export default class Main extends Component {
    render() {
        return (
            <div className="">

                <Header />

                <Home />
                
                <Footer />

            </div>
        )
    }
}
