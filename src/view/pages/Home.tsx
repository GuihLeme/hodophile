import { useEffect, useRef } from 'react'

import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { FaCarSide, FaMotorcycle, FaVanShuttle, FaSquareYoutube , FaInstagram } from "react-icons/fa6";
import { MdOutlinePedalBike } from "react-icons/md";


import menuData from '../../assets/menu-animation3.json'
import globeData from '../../assets/globe-animation.json'
import Logo from '../../assets/logo.png'
import Bruna from '../../assets/bruna.jpg'
import Higor from '../../assets/higor.jpg'

export function Home() {
  const menuRef = useRef<LottieRefCurrentProps>(null)
  const globeRef = useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('header')?.setAttribute('class', 'transition-all duration-1000 h-[180px] w-full flex items-center justify-center bg-[#80b918] px-8')
      document.getElementById('logo')?.setAttribute('class', 'transition-all duration-1000 scale-[35%]')
      document.getElementById('menu')?.setAttribute('class', 'transition-all duration-1000 w-[36px] opacity-100 hover:cursor-pointer')
    }, 1000)
  })

  return(
    <>
      {/* header */}
      <header id='header' className='h-screen flex items-center justify-center w-full bg-[#80b918] px-8'>
        <div className='w-[1440px] flex items-center justify-center margin-auto'>
          <div className='flex flex-1 items-center justify-center'>
            <img src={Logo} id='logo' className='h-auto' />
          </div>
          <Lottie
            id='menu'
            className='w-[48px] opacity-0 hover:cursor-pointer'
            lottieRef={menuRef}
            animationData={menuData}
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
        </div>
      </header>
      {/* video */}
      <video
        src="//a.storyblok.com/f/69091/x/a31bfd700b/showreel-2023-06-13.mp4"
        muted
        autoPlay
        loop
        playsInline
      />
      {/* nav */}
      <div className='my-8 flex flex-col items-center justify-center gap-4 w-[1440px] mx-auto'>
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
        <h1 className='text-[#80b918] text-5xl font-bold uppercase'>Para os amantes da estrada</h1>
      </div>
      {/* texts */}
      <section className='flex items-center justify-center gap-12 p-8  w-[1440px] mx-auto bg-[#81b9181f] m-4'>
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
      {/* search */}
      <div className='width-[1440px] mx-auto flex items-center justify-center gap-4'>
        <h3>Eu vou para</h3>
        <input
          type="text"
          placeholder='pesquisar'
          className='border-[1px] border-[#80b918] rounded-md p-2 w-[360px]'
        />
        <Lottie
            className='w-[72px] '
            lottieRef={globeRef}
            animationData={globeData}
            autoplay={true}
            loop={false}
            onComplete={() => {
              globeRef.current?.playSegments([178, 420], true)
            }}
          />
      </div>
      {/* who we are */}
      <section className='flex flex-col items-center justify-center gap-8'>
        <h1 className='text-[#80b918] text-6xl font-bold'>Quem somos nós?</h1>
        <div className='flex items-center justify-center space-x-32 p-8'>
          <a href='https://www.instagram.com/brunagrybogi/' className='flex flex-col gap-4 items-center justify-center '>
            <img src={Bruna} alt="" className='w-60 h-60 object-cover rounded-full border-8 border-[#80b918] hover:scale-105'/>
            <h3 className='text-3xl font-bold text-[#80b918]'>Bruna Grybogi</h3>
          </a>
          <a href='https://www.instagram.com/brunagrybogi/' className='flex flex-col gap-4 items-center justify-center'>
            <img src={Higor} alt="" className='w-60 h-60 object-cover rounded-full border-8 border-[#80b918]'/>
            <h3 className='text-3xl font-bold text-[#80b918]'>Higor Carneiro</h3>
          </a>
          <a href='https://www.instagram.com/brunagrybogi/' className='flex flex-col gap-4 items-center justify-center'>
            <img src={Bruna} alt="" className='w-60 h-60 object-cover rounded-full border-8 border-[#80b918]'/>
            <h3 className='text-3xl font-bold text-[#80b918]'>Colaborador</h3>
          </a>
        </div>
      </section>
      {/* footer */}
      <footer className='bg-[#80b918] text-white h-auto'>
        <div className=' w-[1440px] mx-auto'>
          <div className='h-[100%] flex items-center justify-center '>
            <img src={Logo} id='logo' className='h-[240px] w-' />
            <div className='flex flex-col items-center justify-center text-xl gap-6 flex-1'>
              <div className='flex flex-col items-start justify-center text-xl gap-1 translate-x-[14px]'>
                <span>Contato:</span>
                <a href="mailto:ola@hodophile.com" className='hover:text-gray-200 transition-all duration-500'>ola@hodophile.com</a>
              </div>
              <div id="contacts" className='flex items-center justify-center flex-1 gap-8'>
                <a href="https://www.youtube.com/@TheSunsetRiders">
                  <FaSquareYoutube  className='text-[60px] hover:text-gray-200 hover:scale-105 transition-all duration-500' />
                </a>
                <a href="https://www.instagram.com/somoshodophiles">
                  <FaInstagram className='text-[62px] hover:text-gray-200 hover:scale-105 transition-all duration-500' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}



