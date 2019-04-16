import React, { Component } from 'react'
import {getShowtimeByMovieTheater} from './../../../Api/Showtime/showtimeApi'
import TimeShowing from './TimeShowing'

export default class ShowtimeContentByTheater extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       theaterId:1,
       movieId:1,
       showtimes:[{}]
    }
  }
  
  setShowtimes=(movieId, theaterId)=>{
    getShowtimeByMovieTheater(movieId,theaterId)
    .then(res=>{
      //console.log(res)
      this.setState({
        showtimes:res
      })
    })
    .catch(err=>console.log(err))
  }

  componentWillReceiveProps(props){   
    this.setState({
      theaterId:props.theaterId
    },()=>{
      
      console.log(this.state.theaterId)
      this.setShowtimes(this.props.movieItem.Id,this.state.theaterId)

      let contentElement =  document.getElementById(`theaterContent${this.state.theaterId}`);
      if(contentElement!=null)contentElement.style.display = "block";
     // document.getElementById(`theaterContent${this.state.theaterId}`).style.display = "block";
    })    
  }
  render() {    
     //console.log(this.props.movieItem)
    const{Image,Name,Rating,TimeSpan} = this.props.movieItem;

    let Element=this.state.showtimes.map((e,index)=>{
      return <TimeShowing
              item={e}
              key={index}
              />
    })
    return (
        <div id={`theaterContent${this.state.theaterId}`} className="tabcontent">
        <div>
          <div className="row">
            <div className="col-sm-2"><img src={Image} width={50} height={70} alt=""/></div>
            <div className="col-sm-4">
              <p>{Name}</p>
              <p>N{Rating}- {TimeSpan}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2"><img src="./Assets/images/2_0.png" width={30} height={30} alt=""/></div>
            <div className="col-sm-8">
              {/* <a id="suat" href="/">18:00</a>
              <a id="suat" href="/">18:15</a>
              <a id="suat" href="/">18:30</a>
              <a id="suat" href="/">18:45</a>
              <a id="suat" href="/">19:00</a>
              <a id="suat" href="/">20:00</a> */}
              {Element}
            </div>
          </div>
        </div>    
        </div>
    )
  }
}
