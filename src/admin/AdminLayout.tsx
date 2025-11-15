import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { LogOut, Settings, Users, FileText, Menu, Map, Navigation } from 'lucide-react';
import { DebugLog } from './components/DebugLog';

export function AdminLayout() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [debugLogs, setDebugLogs] = useState<Array<{
    type: 'error' | 'info' | 'success';
    message: string;
    timestamp: string;
  }>>([]);

  const addDebugLog = (type: 'error' | 'info' | 'success', message: string) => {
    setDebugLogs(prev => [...prev, {
      type,
      message,
      timestamp: new Date().toISOString()
    }]);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="flex-shrink-0 flex items-center">
                <Link to="/admin" className="text-xl font-bold text-gray-900">
                  Narsso Admin
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block w-64 bg-white shadow-sm`}>
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              <Link
                to="/admin/pages"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md gap-2"
              >
                <FileText className="h-5 w-5" />
                Pages
              </Link>
              <Link
                to="/admin/services"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md gap-2"
              >
                <Settings className="h-5 w-5" />
                Services
              </Link>
              <Link
                to="/admin/locations"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md gap-2"
              >
                <Map className="h-5 w-5" />
                Locations
              </Link>
              <Link
                to="/admin/menu"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md gap-2"
              >
                <Navigation className="h-5 w-5" />
                Menu
              </Link>
              <Link
                to="/admin/users"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md gap-2"
              >
                <Users className="h-5 w-5" />
                Users
              </Link>
            </nav>
          </div>
        </aside>

        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Outlet context={{ addDebugLog }} />
            </div>
          </div>
        </main>
      </div>

      <DebugLog logs={debugLogs} />
    </div>
  );
}