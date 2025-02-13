import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/icons/menue.png'
import { Link } from 'react-router-dom'
import { NavbarData } from '../../data'
import RegistrationBtns from './RegistrationBtns'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [showmenuIcon, setshowmenuIcon] = useState(false) // Initial check for screen size
  const sidebarRef = useRef(null)


  const handleClickOutside = (event) => {
    if (toggle && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setToggle(false)
    }
  }

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth <= 1024) {
        setshowmenuIcon(true)

      } else {
        setshowmenuIcon(false)
      }
    }
    handleSize() // Initial check
    window.addEventListener('resize', handleSize)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('resize', handleSize)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [toggle, showmenuIcon])


  return (
    <section className='' >
      {
        showmenuIcon ? (
          <div className=' bg-white py-4 px-3 flex justify-between items-center shadow-lg'>
            <div className='flex items-center gap-2'>
              <img width={24} height={24} src={menu} />
              <img width={71} height={36} src={logo} />
            </div>
            <RegistrationBtns gap='gap-1'  className='px-3 py-1 text-[12px] font-[500]' />
          </div>


        ) : (<div className=' bg-white px-20 py-2 flex  items-center justify-between'>
          <img src={logo} width={120} height={60} />
          <div className='flex items-center gap-14' >
            {
              NavbarData.map((item) => (
                <div className=''>
                  <Link className='text-Secondary-darkGray font-[600] text-lg ' to={item.path}>{item.name}</Link>
                </div>
              ))
            }
          </div>

          <RegistrationBtns gap='gap-5' className='px-8 py-2 text-[17px] font-[600]' />
        </div>)
      }

    </section>
  )
}

export default Navbar