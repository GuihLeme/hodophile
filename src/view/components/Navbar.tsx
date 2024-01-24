import { Fade } from "react-awesome-reveal";
import { FaCarSide, FaMotorcycle, FaVanShuttle } from "react-icons/fa6";
import { MdOutlinePedalBike } from "react-icons/md";

export function Navbar() {
  return (
    <div className='my-8 flex flex-col items-center justify-center gap-4 w-[1440px] mx-auto'>
    <nav>
      <Fade cascade>
        <ul className='flex flex-row items-center justify-center space-x-32 '>
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
      </Fade>
    </nav>
    <h1 className='text-[#80b918] text-5xl font-bold uppercase'>Para os amantes da estrada</h1>
  </div>
  )
}
