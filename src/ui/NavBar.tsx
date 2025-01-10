import { NavLink } from 'react-router-dom';
import LogoImg from '../utils/Images/Logo.png';
import Button from './Button';
import { useState } from 'react';
import {
  FavoriteBorder,
  MenuRounded,
  SearchRounded,
  ShoppingCartOutlined,
} from '@mui/icons-material';

const navLinkStyles =
  'flex items-center text-text_primary font-bold cursor-pointer transition-all duration-300 hover:text-primary pb-1';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-bg min-h-[80px] flex items-center justify-center text-base sticky top-0 z-10 shadow-md p-2">
      <div className="w-full max-w-[1600px] py-2 px-6 flex items-center justify-between text-base">
        {/* Mobile Menu Button */}
        <div
          className="md:hidden flex items-center text-text_primary cursor-pointer"
          onClick={handleToggleMenu}
        >
          <MenuRounded />
        </div>

        {/* Logo Section */}
        <div className="w-[200px] flex items-center font-bold text-lg">
          <img src={LogoImg} alt="Logo" className="h-9" />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center justify-center gap-8 py-0 px-2 list-none">
          <NavLink
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? 'border-b-2 border-primary mt-2' : ''}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? 'border-b-2 border-primary mt-2' : ''}`
            }
            to="/Shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? 'border-b-2 border-primary mt-2 whitespace-nowrap' : 'whitespace-nowrap'}`
            }
            to="/New_Arrivals"
          >
            New Arrivals
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? 'border-b-2 border-primary mt-2' : ''}`
            }
            to="/Orders"
          >
            Orders
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? 'border-b-2 border-primary mt-2' : ''}`
            }
            to="/Contact"
          >
            Contact
          </NavLink>
        </ul>

        {/* Mobile Navigation Menu */}
        <ul
          className={`md:hidden flex flex-col items-start gap-4 list-none w-[80%] p-6 bg-card absolute top-[80px] right-0 transition-all duration-300 ease-in-out shadow-lg ${
            isOpen
              ? 'translate-y-0 opacity-100 z-50'
              : '-translate-y-full opacity-0'
          }`}
        >
          <NavLink
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? 'text-primary' : ''}`
            }
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? 'text-primary' : ''}`
            }
            to="/Shop"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? 'text-primary' : ''}`
            }
            to="/New_Arrivals"
            onClick={() => setIsOpen(false)}
          >
            New Arrivals
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? 'text-primary' : ''}`
            }
            to="/Orders"
            onClick={() => setIsOpen(false)}
          >
            Orders
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? 'text-primary' : ''}`
            }
            to="/Contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </ul>

        {/* Mobile Actions (Search, Favorites, Cart) */}
        <div className="text-text_primary flex items-center justify-center gap-4 md:hidden">
          <NavLink to="/search" className="hover:text-primary transition-all">
            <SearchRounded sx={{ fontSize: '24px' }} />
          </NavLink>
          <NavLink
            to="/favorites"
            className="hover:text-primary transition-all"
          >
            <FavoriteBorder sx={{ fontSize: '24px' }} />
          </NavLink>
          <NavLink to="/cart" className="hover:text-primary transition-all">
            <ShoppingCartOutlined sx={{ fontSize: '24px' }} />
          </NavLink>
          <Button text="Log In" small />
        </div>

        {/* Desktop Actions */}
        <div className="w-[200px] hidden md:flex items-center justify-end gap-2 text-primary">
          <NavLink
            to="/search"
            className="hover:text-primary transition-all p-2"
          >
            <SearchRounded sx={{ fontSize: '24px' }} />
          </NavLink>
          <NavLink
            to="/favorites"
            className="hover:text-primary transition-all p-2"
          >
            <FavoriteBorder sx={{ fontSize: '24px' }} />
          </NavLink>
          <NavLink to="/cart" className="hover:text-primary transition-all p-2">
            <ShoppingCartOutlined sx={{ fontSize: '24px' }} />
          </NavLink>
          <Button text="Log In" small />
        </div>
      </div>
    </div>
  );
}
