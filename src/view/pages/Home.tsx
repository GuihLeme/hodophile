import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { FaCarSide, FaMotorcycle, FaVanShuttle, FaYoutube, FaInstagram, FaSquareXTwitter   } from "react-icons/fa6";
import { MdOutlinePedalBike } from "react-icons/md";

import { useEffect, useRef } from 'react'

import animationData from '../../assets/menu-animation3.json'
import Logo from '../../assets/logo.png'

export function Home() {
  const menuRef = useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('header')?.setAttribute('class', 'transition-all duration-1000 h-[180px] w-full flex items-center justify-center bg-[#80b918] p-2')
      document.getElementById('logo')?.setAttribute('class', 'transition-all duration-1000 scale-[35%]')
      document.getElementById('menu')?.setAttribute('class', 'transition-all duration-1000 w-[30px] opacity-100')
    }, 1000)
  })

  return(
    <>
      <header id='header' className='h-screen flex items-center justify-center w-full bg-[#80b918] px-8'>
        <div className='flex flex-1 items-center justify-center'>
          <img src={Logo} id='logo' className='h-auto' />
        </div>
        <Lottie
          id='menu'
          className='w-[30px] opacity-0'
          lottieRef={menuRef}
          animationData={animationData}
          onClick={() => {
            if(menuRef.current?.getDuration(true) === 70) {
              menuRef.current?.playSegments([70,139], true)
            } else {
              menuRef.current?.playSegments([0,70], true)
            }
          }}
          loop={false}
          autoplay={false}
        />
      </header>
      <video
        src="//a.storyblok.com/f/69091/x/a31bfd700b/showreel-2023-06-13.mp4"
        muted
        autoPlay
        loop
        playsInline
      />
      <div className='my-8 flex flex-col items-center justify-center gap-4'>
        <nav>
          <ul className='flex flex-row items-center justify-center space-x-32'>
            <li className='rounded-full bg-gradient-to-br from-[#80b918] to-[#597c17] p-2 hover:bg-[#597c17] transition-all duration-500'>
              <a href="/carro">
                <FaCarSide className='text-white hover:scale-105 hover:text-[#f7f7f7] transition-all duration-500 h-14 w-14' />
              </a>
            </li>
            <li className='rounded-full bg-[#80b918] p-2 hover:bg-[#597c17] transition-all duration-500'>
              <a href="/moto">
                <FaMotorcycle className='text-white hover:scale-105 hover:text-[#f7f7f7] transition-all duration-500 h-14 w-14' />
              </a>
            </li>
            <li className='rounded-full bg-[#80b918] p-2 hover:bg-[#597c17] transition-all duration-500'>
              <a href="/bike">
                <MdOutlinePedalBike className='text-white hover:scale-105 hover:text-[#f7f7f7] transition-all duration-500 h-14 w-14' />
              </a>
            </li>
            <li className='rounded-full bg-[#80b918] p-2 hover:bg-[#597c17] transition-all duration-500'>
              <a href="/van">
                <FaVanShuttle className='text-white hover:scale-105 hover:text-[#f7f7f7] transition-all duration-500 h-14 w-14' />
              </a>
            </li>
          </ul>
        </nav>
        <h3 className='font-bold text-3xl text-[#80b918] uppercase'>Para os amantes da estrada</h3>
      </div>
      <section className='flex items-center justify-center gap-12 p-8'>
        <div className='border-[1px] rounded-md border-[#80b918] p-4'>
          <h1 className='font-bold text-slate-700 text-xl mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
          <p className='text-gray-900'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eos voluptas perferendis nam eligendi quas praesentium. Deleniti, earum delectus dicta repudiandae, necessitatibus nesciunt unde repellendus expedita accusantium placeat distinctio ratione?
          Animi optio est molestiae eaque corporis dolor velit earum voluptate hic ipsum magnam deleniti neque ab unde eius excepturi soluta facere possimus, recusandae debitis officia iste reprehenderit! Doloremque, modi minus?</p>
        </div>
        <div>
          <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eos voluptas perferendis nam eligendi quas praesentium. Deleniti, earum delectus dicta repudiandae, necessitatibus nesciunt unde repellendus expedita accusantium placeat distinctio ratione?
          Animi optio est molestiae eaque corporis dolor velit earum voluptate hic ipsum magnam deleniti neque ab unde eius excepturi soluta facere possimus, recusandae debitis officia iste reprehenderit! Doloremque, modi minus?</p>
        </div>
        <div>
          <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eos voluptas perferendis nam eligendi quas praesentium. Deleniti, earum delectus dicta repudiandae, necessitatibus nesciunt unde repellendus expedita accusantium placeat distinctio ratione?
          Animi optio est molestiae eaque corporis dolor velit earum voluptate hic ipsum magnam deleniti neque ab unde eius excepturi soluta facere possimus, recusandae debitis officia iste reprehenderit! Doloremque, modi minus?</p>
        </div>
      </section>
      <footer className='bg-[#80b918] text-white h-80 '>
        <div className='h-[100%] flex items-center justify-center'>
          <img src={Logo} id='logo' className='h-[240px] w-' />
          <div id="contacts" className='flex items-center justify-center flex-1 gap-8'>
            <a href="https://www.youtube.com/@TheSunsetRiders">
              <FaYoutube className='text-[60px]' />
            </a>
            <a href="https://www.youtube.com/@TheSunsetRiders">
              <FaInstagram className='text-[60px]' />
            </a>
            <a href="https://www.youtube.com/@TheSunsetRiders">
              <FaSquareXTwitter className='text-[60px]' />
            </a>
          </div>
        </div>
      </footer>
    </>

  )
}


