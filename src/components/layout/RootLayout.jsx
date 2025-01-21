import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'


function RootLayout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default RootLayout