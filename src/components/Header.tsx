import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, Plus, Minus, Search as SearchIcon } from 'lucide-react';
import { Logo } from './Logo';
import { Search } from './Search';
import { mainMenu } from '../data/menu';
import { companyInfo } from '../data/company';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMouseEnter = (title: string) => {
    setActiveSubmenu(title);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (title: string) => {
    setExpandedMenus(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo className="flex-shrink-0" />
          
          <nav className="hidden md:flex flex-1 ml-8">
            <ul className="flex gap-6" role="navigation">
              {mainMenu.map((item) => (
                <li 
                  key={item.path} 
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.external ? (
                    <a 
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#f75e00] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[#f75e00] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="hover:text-[#f75e00] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[#f75e00] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500"
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.submenu && activeSubmenu === item.title && (
                    <div className="absolute top-full left-0 pt-2">
                      <ul className="bg-white shadow-lg rounded-lg py-2 w-64">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.path}>
                            <Link
                              to={subItem.path}
                              className="block px-4 py-2 hover:bg-gray-50 hover:text-[#f75e00] transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
              className="hidden md:flex items-center gap-2 bg-[#f75e00] text-white px-6 py-2 rounded-full hover:bg-[#d95400] transition-colors"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>{companyInfo.phone}</span>
            </a>

            {/* Mobile phone icon */}
            <a
              href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
              className="md:hidden text-[#f75e00]"
              aria-label={`Call ${companyInfo.phone}`}
            >
              <Phone className="w-6 h-6 fill-current" />
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-[#f75e00] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="mb-4 px-4">
              <Search />
            </div>
            <ul className="space-y-2">
              {mainMenu.map((item) => (
                <li key={item.path}>
                  <div className="flex items-center justify-between">
                    {item.external ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-2 hover:text-[#f75e00] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className="block py-2 hover:text-[#f75e00] transition-colors"
                        onClick={() => handleNavigation(item.path)}
                      >
                        {item.title}
                      </Link>
                    )}
                    {item.submenu && (
                      <button
                        onClick={() => toggleSubmenu(item.title)}
                        className="p-2"
                      >
                        {expandedMenus.includes(item.title) ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </button>
                    )}
                  </div>
                  {item.submenu && expandedMenus.includes(item.title) && (
                    <ul className="pl-4 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.path}>
                          <Link
                            to={subItem.path}
                            className="block py-1 text-gray-600 hover:text-[#f75e00] transition-colors"
                            onClick={() => handleNavigation(subItem.path)}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}