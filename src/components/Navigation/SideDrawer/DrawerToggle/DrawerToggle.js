import styled from './DrawerToggle.module.css'

const DrawerToggle = (props) => {
  return (
    <div className={styled.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default DrawerToggle