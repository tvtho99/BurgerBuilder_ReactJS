import React from 'react';

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import styled from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {
  let attachedClasses = [styled.SideDrawer, styled.Close]
  if (props.open) {
    attachedClasses = [styled.SideDrawer, styled.Open]
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={styled.Logo}>
          <Logo />
        </div>
        <nav >
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>

  )
}

export default SideDrawer