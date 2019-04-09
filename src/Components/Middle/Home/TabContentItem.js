import React, { Component } from 'react'

export default class TabContentItem extends Component {
    render() {

        const { title, text, image } = this.props.item;
        return (

            <div className='col-md-4' >
                <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                    <img className='card-img-top' src={image} alt="NoImage" height='390px' />
                        <div className="block2-overlay trans-0-4">
                            <div className="block2-btn-addcart w-size1 trans-0-4">
                                {/* Button */}
                                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                    MUA VÉ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='card-body'>
                    <h4 className='card-title'>{title}</h4>
                    <p className='card-text' > {text}</p>
                </div>
            </div>

        )
    }
}
