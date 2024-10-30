import { useState } from 'react';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
import ELogo from '../../assets/img/e-commerce-logo.svg';

const liMobile = 'pb-5 text-xl';
const aMobile = 'hover:border-l-2 hover:border-orange-500 hover:pl-4';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container-global h-16 px-4 py-1 flex justify-between">
      <a href="" className="w-3/6 ">
        <img src={ELogo} alt="" className="h-full" />
      </a>

      <button onClick={toggleMenu} className="md:hidden block">
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars4Icon className="w-6 h-6" />
        )}
      </button>

      <nav
        className={`md:flex ${isOpen ? 'block' : 'hidden '} w-full md:w-auto md:space-x-4 absolute top-16 bg-white `}
      >
        <ul>
          <li className={liMobile}>
            <a href="" className={aMobile}>
              Catalogo
            </a>
          </li>
          <li className={liMobile}>
            <a href="" className={aMobile}>
              Carinho
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
