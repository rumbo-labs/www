import Link from 'next/link'
import React, { ReactNode, useEffect, useRef } from 'react'
import Header from '../config'
import Discord from '../icons/Discord'
import Github from '../icons/Github'
import LogoSmall from '../icons/LogoSmall'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='min-h-screen'>
        <div className="flex flex-col">
          <div className="bg-black min-h-screen">
            {children}
          </div>
          <Footer />
      </div>
    </div>
    </>
  )
}

export default Layout