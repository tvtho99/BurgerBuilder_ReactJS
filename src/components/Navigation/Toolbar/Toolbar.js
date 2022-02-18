import styled from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const Toolbar = (props) => {
  return (
    <header className={styled.Toolbar}>
      <DrawerToggle clicked={props.clicked} />
      <div className={styled.Logo}>
        <Logo />
      </div>
      <nav className={styled.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar