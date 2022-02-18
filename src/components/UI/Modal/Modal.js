import React from 'react';

import styled from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={styled.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-200vh)',
          opacity: props.show ? '1' : '0.5'
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default React.memo(Modal)