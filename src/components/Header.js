import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="bg-primary text-maintext font-heading font-bold sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24 md:h-24 lg:h-32 xl:h-32">
          {/* Logo */}
          <Link
            to="/"
            className="
              flex items-center space-x-2
              pt-2 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-8
            "
          >
            <img
              src="/images/Hudson_Logo.png"
              alt="Home"
              className="
                h-[150px] sm:h-[190px]
                md:h-[210px] lg:h-[250px] xl:h-[300px]
                w-auto
              "
            />
          </Link>


          {/* Menu */}
          <ul className="flex space-x-6 items-center text-sm sm:text-base md:text-lg lg:text-xl">
          <li>
            <Link
              to="/shop"
              className="px-3 py-1 rounded hover:bg-black/20 hover:text-buttonhover transition duration-300"
            >
              Shop All
            </Link>
          </li>
          <li>
            <Link
              to="/checkout"
              className="px-3 py-1 rounded hover:bg-black/20 hover:text-buttonhover transition duration-300"
            >
              Checkout
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-3 py-1 rounded hover:bg-black/20 hover:text-buttonhover transition duration-300"
            >
              About
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}
