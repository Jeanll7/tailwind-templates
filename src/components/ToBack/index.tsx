import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { RiArrowGoBackFill } from "react-icons/ri";

export function ToBack() {
  return (
    <div className='w-full flex items-center justify-center h-16 bg-slate-800 drop-shadow-sm shadow-md'>
      <header className='flex w-full max-w-7xl items-center justify-between px-4 mx-auto'>
          <Link to="/">
            <img
              className='w-14 text-black'
              src={logoImg}
              alt='Logo da página'                  
            />
          </Link>
          <span className='mr-auto px-2 text-3xl font-bold text-white'>
            Components
          </span>

          <Link to="/" className='px-6'>            
            <RiArrowGoBackFill  size={30} color='#fff' />            
          </Link>
      </header>
    </div>
  )
}