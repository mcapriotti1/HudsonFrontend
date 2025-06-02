// src/components/Header.js
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCatalog from '../hooks/useCatalog';
import { getDirectChildrenOfCategory } from '../utils/catalog';
import { FiShoppingCart } from 'react-icons/fi';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Header() {
  const { catalogRoot, loading } = useCatalog();
  const [onlineChildren, setOnlineChildren] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (catalogRoot) {
      const children = getDirectChildrenOfCategory(catalogRoot, 'online');
      setOnlineChildren(children);
    }
  }, [catalogRoot]);

  return (
    <nav className="bg-primary text-maintext font-heading sticky top-0 z-50 shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 sm:h-24 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 mr-8 sm:mr-8 md:mr-20 lg:mr-32">
            <img
              src="/images/Circle_Logo.png"
              alt="Home"
              className="h-[70px] sm:h-[85px] md:h-[85px] lg:h-[95px] w-auto border border-transparent hover:border-black rounded-full hover:shadow-xlg transition-colors transition-shadow duration-1000"
            />
          </Link>

          {/* Left spacer */}
          <div className="flex-grow" />

          {/* Hamburger button (small screens only) */}
          <button
            className="md:hidden text-2xl text-maintext focus:outline-none"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>

          {/* Desktop menu (hidden on small screens) */}
          <ul className="hidden md:flex w-full">
            <li className="flex-1 text-center">
              <Link to="/shop" className="underline-hover whitespace-nowrap text-[14px] sm:text-sm md:text-base lg:text-lg py-2 inline-block">Shop All</Link>
            </li>
            {!loading &&
              onlineChildren.map((category) => (
                <li key={category.id} className="flex-1 text-center">
                  <Link to={`/shop/${category.id}`} className="underline-hover whitespace-nowrap text-[14px] sm:text-sm md:text-base lg:text-lg py-2 inline-block">{category.name}</Link>
                </li>
              ))}
            <li className="flex-1 text-center">
              <Link to="/cart" className="flex justify-center items-center text-gray-600 hover:text-black transition-colors duration-200 py-2 whitespace-nowrap" aria-label="Cart">
                <FiShoppingCart className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] transition-transform duration-200 hover:scale-110" />
              </Link>
            </li>
            <li className="flex-1 text-center">
              <Link to="/about" className="underline-hover whitespace-nowrap text-[14px] sm:text-sm md:text-base lg:text-lg py-2 inline-block">About</Link>
            </li>
          </ul>

          {/* Right spacer */}
          <div className="flex-grow hidden md:block" />
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-primary mt-2 rounded-md shadow-lg overflow-hidden">
            <ul className="flex flex-col divide-y divide-neutral-700">
              <li>
                <Link
                  to="/shop"
                  className="block px-4 py-3 text-base underline-hover"
                  onClick={() => setMobileOpen(false)}
                >
                  Shop All
                </Link>
              </li>
              {!loading &&
                onlineChildren.map((category) => (
                  <li key={category.id}>
                    <Link
                      to={`/shop/${category.id}`}
                      className="block px-4 py-3 text-base underline-hover"
                      onClick={() => setMobileOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  to="/cart"
                  className="flex px-4 py-3 items-center underline-hover"
                  onClick={() => setMobileOpen(false)}
                >
                  <FiShoppingCart className="mr-2 text-xl" />
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block px-4 py-3 text-base underline-hover"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
