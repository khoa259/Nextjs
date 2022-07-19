import React from 'react'
import { LayoutProps } from '../../models/layout'
import Footer from '../Footer'
import Header from '../Header'


type Props = {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className='my-10'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout