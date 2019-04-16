import React, { Component } from 'react'
import Theater from './Shared/Theater'
import ShowtimeContentByTheater from './Shared/ShowtimeContentByTheater'

import {getAllTheaters}  from './../../Api/Theater/theaterApi'

export default class Showtime extends Component {

  constructor(props){
    super(props)

    this.state={
      theaters:[{}],      
      theaterId:1
    }
  }

//function
setTheaters = ()=>{
  getAllTheaters().then(
    res=>{
      this.setState({
        theaters: res,
        theaterId:1
      })
    }
  ).catch(err=>console.log(err))
}

setTheaterId=(id)=>{
  this.setState({
    theaterId:id
  })
}


  componentDidMount(){
    this.setTheaters()   
  }

  render() {
    //console.log(this.props.movieItem)
    const theaterElement = this.state.theaters.map((item,index)=>{
      return <Theater 
           setTheaterId={this.setTheaterId}
             item= {item} key={index}/>
    })
    return (
        <div id="lichchieu">
        <div id="ten">
          Lịch Chiếu
        </div>
        <div className="tab">
          <div>
            {/* <div id="rapp"><img src="./Assets/images/f32670fd0eb083c9c4c804f0f3a252ed.png" width={30} height={30} alt=""/></div>
            <button className="tablinks" id="defaultOpen"><h6> BHD Star Cineplex - Bitexco</h6></button>
            <button className="tablinks" ><h6> BHD Star Cineplex - Thảo Điền</h6></button> */}
           {theaterElement}
          </div>
          {/* <div>
            <div id="rapp"><img src="./Assets/images/e520781386bd5436e94d6e15e193a005.png" width={30} height={30} alt=""/></div>
            <button className="tablinks" ><h6> Galaxy Quang Trung</h6></button>
            <button className="tablinks" ><h6> Galaxy Nguyễn Du</h6></button>
          </div> */}
        </div>
        <ShowtimeContentByTheater theaterId={this.state.theaterId}
                                  movieItem={this.props.movieItem}/>
        {/* <div id="theaterContent32" className="tabcontent">
          <div>
            <div className="row">
              <div className="col-sm-2"><img src="./Assets/images/shazam_-_160.jpg" width={50} height={70} alt=""/></div>
              <div className="col-sm-4">
                <p>Shazam!</p>
                <p>NC13 - 2h12'</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2"><img src="./Assets/images/2_0.png" width={30} height={30} alt=""/></div>
              <div className="col-sm-8">
                <a id="suat" href="/">18:00</a>
                <a id="suat" href="/">18:15</a>
                <a id="suat" href="/">18:30</a>
                <a id="suat" href="/">18:45</a>
                <a id="suat" href="/">19:00</a>
                <a id="suat" href="/">20:00</a>
              </div>
            </div>
          </div>   
          </div> */}
       
       
       
      </div>
      
    )
  }
}
