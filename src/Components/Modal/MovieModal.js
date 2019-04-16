import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
export default class MovieModal extends Component {
  render() {
    const { Name, Video } = this.props.movieItem
    return (
      <div className="modal bgModalBlack" id="movieModal" >

        <div className="modal-dialog modal-exlg">




          <div className="modal-content bgModalBlack textWhite" >


            <h4 className="modal-title">{Name}</h4>


            <div className="modal-body">

              <iframe width="720" height="480"
                title="unique"
                src={Video}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>


            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
