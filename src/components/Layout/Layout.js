import React, { useState } from 'react';

import styled from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {

  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false)
  }

  const drawerToggleClicked = () => {
    setShowSideDrawer(prevValue => !prevValue)
  }

  return (
    <React.Fragment>
      <Toolbar clicked={drawerToggleClicked} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={styled.Content}>
        {props.children}
      </main>
    </React.Fragment>
  )
}
export default Layout
