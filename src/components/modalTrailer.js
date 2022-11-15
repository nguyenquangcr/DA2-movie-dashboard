import React from 'react'
import { connect } from 'react-redux'

function ModalTrailer(props) {
    return (
        <div className="modal fade" id="modalTrailer" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <iframe style={{ width: '100%' }} height="315px" src={props.trailer} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        trailer: state.detail.trailer
    }
}
export default connect(mapStateToProps, null)(ModalTrailer)