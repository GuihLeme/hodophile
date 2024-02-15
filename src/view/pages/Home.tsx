import { useRef } from 'react'

import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import {FaSquareYoutube , FaInstagram } from "react-icons/fa6";
import { Fade } from 'react-awesome-reveal'


import globeData from '../../assets/animation/globe-animation.json'
import Logo from '../../assets/logo.png'
import Bruna from '../../assets/bruna.jpg'
import Higor from '../../assets/higor.jpg'
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { ProfileCard } from '../components/ProfileCard';

export function Home() {
  const globeRef = useRef<LottieRefCurrentProps>(null)

  return(
    <>
      {/* header */}
      <Header />
      {/* video */}
      <video
        src="//a.storyblok.com/f/69091/x/a31bfd700b/showreel-2023-06-13.mp4"
        muted
        autoPlay
        loop
        playsInline
      />
      {/* nav */}
      <Navbar />
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
          className='border-2 border-[#80b918] rounded-md p-2 w-[360px]'
        />
        <Lottie
            className='w-[80px] ml-4'
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
        <Fade cascade>
          <ul className='flex items-center justify-center space-x-32 p-8'>
            <li>
              <ProfileCard
                name='Bruna Grybogi'
                imgURL={Bruna}
                socialURL='https://www.instagram.com/brunagrybogi/'
              />
            </li>
            <li>
              <ProfileCard
                name='Higor Carneiro'
                imgURL={Higor}
              />
            </li>
            <li>
              <ProfileCard
                name='Higor Carneiro'
                imgURL={Higor}
              />
            </li>
          </ul>
        </Fade>
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



