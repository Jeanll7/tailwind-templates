import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { BsGithub } from "react-icons/bs";

export function NavHeader() {
  return (
    <div>
      <header className="bg-black border-b border-gray-700">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="flex">
                <img className="w-14" src={Logo} alt="Logo da página" />
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-10">
              <Link
                to="/"
                className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">
                Home
              </Link>

              <Link
                to="/"
                className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">
                Solutions
              </Link>

              <Link
                to="https://github.com/Jeanll7/tailwind-templates"
                className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">
                <BsGithub size={30} color="#fff" />
              </Link>
            </div>
          </nav>

          <nav className="min-h-screen px-4 py-10 text-center bg-black md:hidden">
            <nav className="flex flex-col items-center mt-10 space-y-2">
              <Link
                to="/"
                className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">
                Features
              </Link>

              <Link
                to="/"
                className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">
                Solutions
              </Link>

              <Link
                to="/"
                className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">
                Resources
              </Link>
            </nav>
          </nav>
        </div>
      </header>
    </div>
  );
}
