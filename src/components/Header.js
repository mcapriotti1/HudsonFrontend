import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="bg-primary text-maintext font-heading font-bold sticky top-0 z-50 shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24 md:h-24 lg:h-24 xl:h-24">
          {/* Logo */}
          <Link
            to="/"
          >
            <img
              src="/images/Hudson_Logo.jpeg"
              alt="Home"
              className="
                h-[70px] sm:h-[85px]
                md:h-[85px] lg:h-[110px] xl:h-[120px]
                w-auto
                border border-transparent hover:border-white
                shadow-md hover:shadow-lg
                transition-colors transition-shadow duration-1000
              "
            />
          </Link>


          {/* Menu */}
          <ul className="flex space-x-6 items-center text-sm sm:text-base md:text-lg lg:text-xl">
          <li>
            <Link to="/shop" className="underline-hover">Shop All</Link>
          </li>
          <li>
            <Link to="/checkout" className="underline-hover">Checkout</Link>
          </li>
          <li>
            <Link to="/about" className="underline-hover">About</Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}
