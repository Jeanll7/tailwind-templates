import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { IoHome, IoNotifications } from 'react-icons/io5'
import { BiBarChartAlt } from "react-icons/bi";
import { BsPersonFill, BsPeopleFill, BsChevronExpand, BsGithub } from "react-icons/bs";
import { FaFolder } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";


export function MenuLeft() {        
  return (
    <div className="flex flex-1 h-screen bg-gray-50">
      <div className="md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white">
          <div className="flex items-center flex-shrink-0 px-4 font-medium">
            <Link to="/">
              <img
                className='w-9'
                src={logo}
                alt='Logo da página'                  
              />
            </Link>
            <span className='px-2 text-xl font-bold text-black'>
              Menu Left
            </span>
          </div>

          <div className="px-4 mt-6">
            <hr className="border-gray-200" />
          </div>

          <div className="flex flex-col flex-1 px-3 mt-6">
          <div className="space-y-4">
            <nav className="flex-1 space-y-2">
                <Link to="/" title="" className="flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-lg group gap-4">
                  <IoHome size={20} color="#000" />
                  Home
                </Link>

                <Link to="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group gap-3">
                  <BiBarChartAlt size={22} />
                  Tickets
                </Link>

                <Link to="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group gap-3">
                    <BsPersonFill size={22} />
                    Agents
                </Link>

                <Link to="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group gap-3">                
                    <BsPeopleFill size={22}  />
                    Customers                    
                </Link>
            </nav>

            <hr className="border-gray-200" />

            <nav className="flex-1 space-y-2">
              <Link to="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group gap-3">
                <FaFolder size={18} />
                Products
              </Link>

              <Link to="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group gap-3">
                <IoNotifications size={20} />
                Notifications
              </Link>

            </nav>

            <hr className="border-gray-200" />

            <nav className="flex-1 space-y-2">
              <Link to="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group gap-3">
                <IoMdSettings size={20} />                
                  Settings 
                  <div className="flex items-center ml-16">
                    <AiOutlineDown size={18} />
                  </div>              
              </Link>
            </nav>
          </div>

            <div className="pb-4 mt-11">
              <Link to="https://github.com/Jeanll7/tailwind-templates" className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-100 gap-3">
                <BsGithub size={20} />
                  <span className="flex items-center mr-16">
                  GitHub
                </span>
                <BsChevronExpand size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 bg-slate-800">
        <main>
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <span className="text-white">
                {/* Main */}
              </span>              
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
