import { Link } from "react-router";
import { IoMenu } from "react-icons/io5";
import Style from "./Header.module.css";

function Header() {
  return (
    <header
      className="fixed z-50
     inset-x-0 px-5 md:px-0  bg-red-600"
    >
      <div className="flex justify-between items-center h-12 md:h-16 max-w-7xl mx-auto">
        {/* logo sec */}

        <div className="flex md:grid text-center items-baseline justify-center text-white">
          <img className="h-8 mx-auto" src="/logo.png" />

          <p className=" translate-y-[-4px] md:translate-y-0">Garments</p>
        </div>

        {/* navbar sec */}

        <nav className="hidden md:flex gap-20 text-lg font-semibold text-white">
          <Link className={`${Style.navLink} transition duration-300`} to="/">
            Home
          </Link>
          <Link
            className={`${Style.navLink} transition duration-300`}
            to="/about"
          >
            About
          </Link>
          <Link
            className={`${Style.navLink} transition duration-300`}
            to="/contact"
          >
            Contact
          </Link>
        </nav>

        {/* login sec */}

        <div className="hidden md:flex gap-7 text-white font-medium ">
          <Link
            className="border-2 border-white px-5 py-1.5 bg-transparent rounded-full"
            to="/login"
          >
            Log in
          </Link>
          <Link
            className="border-2 border-white px-5 py-1.5 bg-transparent rounded-full"
            to="/signUp"
          >
            Sign up
          </Link>
        </div>

        {/* menu icon */}

        <div className="md:hidden text-3xl text-white">
          <IoMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
