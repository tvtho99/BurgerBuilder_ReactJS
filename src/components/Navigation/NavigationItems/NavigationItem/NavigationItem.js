import styled from './NavigationItem.module.css'

const NavigationItem = (props) => {
  return (
    <li className={styled.NavigationItem}>
      <a
        href={props.link}
        className={props.active ? styled.active : null}
      >{props.children}</a>
    </li>
  )
}

export default NavigationItem