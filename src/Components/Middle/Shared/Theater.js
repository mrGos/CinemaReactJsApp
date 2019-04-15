import React, { Component } from 'react'

import TheaterChild from './TheaterChild'
import {getAllTheaterChild} from './../../../Api/Theater/theaterApi'

export default class Theater extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         theatersChild:[{}]
      }
    }
    
setTheatersChild(id){
        getAllTheaterChild(id).then(
            res=>{
              if(res!==null&&res!==undefined){
                this.setState({
                    theatersChild: res
                  })
              }
            }
          ).catch(err=>console.log(err))
    }

    componentWillReceiveProps(props){
        const id = props.item.Id
        this.setTheatersChild(id)
        //console.log('Did mount '+id)
       
    }
  render() {
      const {Image} = this.props.item     
    return (
        <div>
        <div id="rapp"><img src={Image} width={30} height={30} alt="" /></div>
        {/* <button className="tablinks" id="defaultOpen"><h6> BHD Star Cineplex - Bitexco</h6></button>
        <button className="tablinks" ><h6> BHD Star Cineplex - Thảo Điền</h6></button> */}
        <TheaterChild 
              setTheaterId={this.props.setTheaterId}
             theatersChild={this.state.theatersChild} 
                      /> 
    </div>
    )
  }
}
