import Lottie, { LottieRefCurrentProps } from 'lottie-react'

import { useEffect, useRef, useState } from "react"

import menuData from '../../assets/menu-animation3.json'
import Logo from '../../assets/logo.png'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('header')?.setAttribute('class', 'transition-all duration-1000 h-[180px] w-full flex items-center justify-center bg-[#80b918] px-8')
      document.getElementById('logo')?.setAttribute('class', 'transition-all duration-1000 scale-[35%]')
      document.getElementById('menu')?.setAttribute('class', 'transition-all duration-1000 w-[36px] opacity-100 hover:cursor-pointer')
    }, 1000)
  })

  if(isMenuOpen) {
    document.getElementById('modal')?.setAttribute('class', 'opacity-1 absolute top-0 h-[180px] w-full bg-teal-500 transition-all duration-1000')
  } else if (!isMenuOpen) {
    document.getElementById('modal')?.setAttribute('class', 'opacity-0 absolute top-0 h-0 w-full  bg-transparent transition-all duration-1000')
  }

  return(
    <header id='header' className='h-screen flex items-center justify-center w-full bg-[#80b918] px-8 relative'>
      <div className='w-[1440px] flex items-center justify-center margin-auto'>
        <div className='flex flex-1 items-center justify-center'>
          <img src={Logo} id='logo' className='h-auto' />
        </div>
      </div>

      <div id='modal' className='opacity-0 hidden'>
        <a href="#home">Home</a>
        <a href="#search">Search</a>
        <a href="#whoweare">Quem somos nós?</a>
        <a href="#blog">Blog</a>
        <a href="#contacts">Contatos</a>
      </div>
      <Lottie
        id='menu'
        className='w-[48px] opacity-0 hover:cursor-pointer z-50 absolute top-[60px] right-8'
        lottieRef={menuRef}
        animationData={menuData}
        onClick={() => {
          if(menuRef.current?.getDuration(true) === 70) {
            menuRef.current?.playSegments([70,139], true)
            setIsMenuOpen(false)
          } else {
            menuRef.current?.playSegments([0,70], true)
            setIsMenuOpen(true)
          }
        }}
        loop={false}
        autoplay={false}
      />
    </header>
  )
}

