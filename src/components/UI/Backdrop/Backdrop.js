import styled from './Backdrop.module.css'

const Backdrop = (props) => (
  props.show ? <div className={styled.Backdrop} onClick={props.clicked}></div> : null
)

export default Backdrop