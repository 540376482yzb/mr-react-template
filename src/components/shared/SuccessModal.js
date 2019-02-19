import React, { Component } from 'react';
import Overlay from './Overlay';

class SucceedModal extends Component {

  render() {
    return (
      <Overlay style={{ width: '200px', height: '200px' }} className="rounded">
        <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          <img className="avatar-icon-lg" src={`${process.env.PUBLIC_URL}/img/succeed.png`} alt="icon" />
          <h3 className="succeed-modal-message">Succeeded!</h3>
        </div>
      </Overlay>
    )
  }
}

export default SucceedModal;