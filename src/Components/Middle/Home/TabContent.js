import React, { Component } from 'react'
import TabContentItem from './TabContentItem'
import MovieModal from './../../Modal/MovieModal'
import Carousel from 'react-bootstrap/Carousel'

const mockupData = [
    {
        title: 'Captain Marvel',
        text: '120 phút - 7.8 IMDb',
        image: 'https://s3img.vcdn.vn/mobile/123phim/2018/12/dai-uy-marvel-captain-marvel-15439001420153_370x490.jpg'
    },
    {
        title: 'Yêu Nhầm Bạn Thân',
        text: '100 phút',
        image: 'https://s3img.vcdn.vn/123phim/2019/02/yeu-nham-ban-than-friendzone-15512553703287.jpg'
    },
    {
        title: 'Zombie Đại Hạ Gía',
        text: '100 phút',
        image: 'https://s3img.vcdn.vn/123phim/2019/03/zombie-dai-ha-gia-15516736313809.jpg'
    }
]

export default class TabContent extends Component {

    
    onNextMovieHandle = ()=>{
        console.log('next click')
        let typeMovie = this.props.typeMovie
       this.props.onNextMovie(typeMovie)
    }

    onPrevPageHandle = ()=>{
        let typeMovie = this.props.typeMovie
        console.log('prev click')
        this.props.onPrevMovie(typeMovie)
    }

    componentDidMount(){
        console.log(this.props.onNextMovie)
    }
    render() {      
        
        let ItemElm = this.props.listMovies.map(
            (item, index) => {
                return <TabContentItem
                item={item}
                    key={index}
                    setMovieItem={this.props.setMovieItem}
                   
                />
            }
        )
        return (

            <div>
                <div className='container' >
                    <div className="btn left-button"  ><i className="fa fa-chevron-left" onClick={this.props.onPrevMovie.bind(this,this.props.typeMovie)}></i></div>
                    <div className="btn right-button" ><i className="fa fa-chevron-right" onClick={ this.props.onNextMovie.bind(this,this.props.typeMovie)}></i></div>
                    <div className='row'>
                        {ItemElm}
                    </div>
                    
                </div>
               
            </div>
           
        )
    }
}


