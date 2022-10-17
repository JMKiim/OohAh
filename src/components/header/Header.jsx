import React from 'react'
import { SHeader, SLink, HeaderText, Sicon } from './HeaderStyle'
import logo from '../../img/logo.png'
const Header = () => {
  return (
    <SHeader>

      {/* <SLink to='/'><Sicon className="fa-solid fa-house"></Sicon></SLink> */}
      <SLink to='/'><img src={logo} /></SLink>
      {/* <HeaderText>우아한 아재들</HeaderText> */}
    </SHeader>
  )
}
export default Header