import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Search } from './Search';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    ...pathnames.map((name, index) => ({
      name: name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      url: `/${pathnames.slice(0, index + 1).join('/')}`
    }))
  ];

  return (
    <nav className="bg-gray-50 py-3 border-b" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <ol className="flex items-center space-x-2">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;

              return (
                <li key={item.url} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                  )}
                  {isLast ? (
                    <span className="text-gray-900 font-medium">{item.name}</span>
                  ) : (
                    <Link
                      to={item.url}
                      className="text-gray-600 hover:text-[#f75e00] transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
          
          <div className="hidden md:block w-64">
            <Search />
          </div>
        </div>
      </div>
    </nav>
  );
}