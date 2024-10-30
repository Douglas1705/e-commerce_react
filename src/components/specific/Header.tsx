import { useState } from 'react';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
import ELogo from '../../assets/img/e-commerce-logo.svg';

const li = 'pb-5 text-xl md:py-3.5 ';
const aMobile =
  'hover:border-l-2 hover:border-orange-500 hover:pl-4 md:hover:border-none md:hover:pl-0 md:hover:bg-yellow-100';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container-global left-1/2 transform -translate-x-1/2 fixed w-full flex flex-row justify-between items-center bg-white h-14">
      <div className=" h-8 box-border pl-6 md:h-10">
        <a href="" className="">
          <img src={ELogo} alt="" className="w-full h-full object-contain" />
        </a>
      </div>

      <button onClick={toggleMenu} className="md:hidden block pr-4">
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars4Icon className="w-6 h-6" />
        )}
      </button>

      <nav
        className={`md:flex ${isOpen ? 'block' : 'hidden '} w-full md:w-auto md:space-x-4 absolute top-14 bg-white pl-6 md:pr-6
          
        md:relative md:top-0`}
      >
        <ul className="md:flex md:flex-row md:gap-5 ">
          <li className={`${li}`}>
            <a href="/" className={aMobile}>
              Catalogo
            </a>
          </li>
          <li className={li}>
            <a href="carrinho" className={aMobile}>
              Carinho
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
