import burgerLogo from "../../assets/images/burger-logo.png"
import styled from './Logo.module.css'

const Logo = (props) => {
  return (
    <div className={styled.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  )
}
export default Logo