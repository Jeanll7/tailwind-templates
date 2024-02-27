import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { CiSearch } from "react-icons/ci";
import { VscLibrary } from "react-icons/vsc"; 

export function MenuFooter() {
  return (    
    <div className="h-screen flex flex-col bg-zinc-800 text-zinc-50">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className='space-y-5 mt-5'>
            <Link to="/" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <AiOutlineHome size={22} />
              Home
            </Link>
            <Link to="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <CiSearch  size={22} />
              Search
            </Link>
            <Link to="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <VscLibrary size={22} />
              Your Libary
            </Link>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-800">

          </nav>
        </aside>
        <main className="flex-1 p-6">
          main
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>    
  )
}