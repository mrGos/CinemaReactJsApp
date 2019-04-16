import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class TabContentItem extends Component {


    movieOnClick=(item)=>{
        this.props.setMovieItem(this.props.item)
    }

    componentDidMount(){
       // console.log(this.props.setMovieItem)
       
    }
    render() {
       
        const {  Name, Image,Id } = this.props.item;
        return (

            <div className='col-md-4 textWhite' >
                <div className="block2">
                    
                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                 
                    <img className='card-img-top' src={Image} alt="NoImage" height='390px' />
                   
                        <div className="block2-overlay trans-0-4">
                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                {/* Button */}
                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4 " data-toggle="modal" data-target="#movieModal"
                                onClick={this.movieOnClick.bind(this,this.props.item)}>
                                   Trailer
                                </button>
                            </div>
                        </div>
                    </div>
                  
                </div>
                
                <div className='card-body'>
                   <Link 
                         to={`/movie/${Id} `}  >
                    <h4 className='card-title'>{Name}</h4>
                    </Link>
                    {/* <p className='card-text' > {text}</p> */}
                </div>
            </div>

        )
    }
}
