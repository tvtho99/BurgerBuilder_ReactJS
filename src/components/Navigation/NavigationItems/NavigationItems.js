import styled from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => {
  return (
    <ul className={styled.NavigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/" >
        Checkout
      </NavigationItem>
    </ul>
  )
}
export default NavigationItems