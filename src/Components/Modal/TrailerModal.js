import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
export default class TrailerModal extends Component {
    render() {
        const { movieItem } = this.props
        let Name="",Video=""
        if(movieItem!==null&&movieItem!==undefined){
            Name = movieItem.Name
            Video = movieItem.Video
        }
        return (
            <Modal
                style={trailerBgStyle}
                dialogClassName="modal-exlg"
                show={this.props.isShown}
                onHide={this.props.setHideModal}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton style={trailerBgStyle}>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {Name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={trailerBgStyle}>
                    <iframe width="100%" height="600"
                        title="unique"
                        src={Video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </Modal.Body>
            </Modal>

        )
    }
}


const trailerBgStyle = {
    background: 'rgba(0,0,0,0.8)',
    color: 'white'

}
