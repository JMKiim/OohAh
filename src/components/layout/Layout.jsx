import React from 'react'
import Header from '../header/Header'
import { LayoutBody } from './LayoutStyle'


const Layout = (props) => {
  return (
    <>
      <Header />
      <LayoutBody>
        {props.children}
      </LayoutBody>
    </>

  )
}
export default Layout;

