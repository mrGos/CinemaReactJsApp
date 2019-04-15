import React, { Component } from 'react'

export default class TheaterChildItem extends Component {

    onTabClick=(id,e)=>{        
        let i, tabcontent, tablinks;        
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        //document.getElementById(`theaterContent${id}`).style.display = "block";
        e.currentTarget.className += " active";

        this.props.setTheaterId(id)
        //console.log(id)
      //  this.props.theaterId = this.props.item.Id
    }

  render() {
    const{Id,Name}=this.props.item
    //console.log(Id)
    return (
        <button id={Id} 
        className="tablinks" 
        onClick={this.onTabClick.bind(this,Id)}
        ><h6> {Name}</h6></button>
    )
  }
}
