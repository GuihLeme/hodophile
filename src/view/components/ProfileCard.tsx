interface ProfileCardProps {
  imgURL: string;
  name: string;
  socialURL?: string;
}

export function ProfileCard({ name, imgURL, socialURL }: ProfileCardProps) {
  return(
    <a href={socialURL} className='flex flex-col gap-4 items-center justify-center '>
      <img src={imgURL} alt="" className='w-60 h-60 object-cover rounded-full border-8 border-[#80b918] hover:scale-105 transition-all duration-500'/>
      <h3 className='text-3xl font-bold text-[#80b918]'>{name}</h3>
    </a>
  )
}
