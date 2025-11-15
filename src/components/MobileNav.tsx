import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import type { MenuItem } from '../types';

interface MobileNavProps {
  menu: MenuItem[];
}

export function MobileNav({ menu }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white shadow-lg z-50">
          <ul className="py-2">
            {menu.map((item) => (
              <li key={item.title} className="border-b border-gray-100 last:border-none">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className="flex items-center justify-between w-full px-6 py-3 hover:bg-gray-50"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          openSubmenu === item.title ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openSubmenu === item.title && (
                      <ul className="bg-gray-50 py-2">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.title}>
                            <Link
                              to={subitem.path}
                              className="block px-8 py-2 hover:text-blue-600"
                              onClick={() => setIsOpen(false)}
                            >
                              {subitem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-6 py-3 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}