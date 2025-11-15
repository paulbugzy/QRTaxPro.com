import React, { useState, useEffect } from 'react';
import { Navigation, Edit, Trash2, Plus, ChevronRight } from 'lucide-react';

export function MenuManagement() {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/menu', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch menu items');
      }
      
      const data = await response.json();
      setMenuItems(data);
    } catch (err) {
      setError('Failed to load menu items');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMenuItem = (item: any) => (
    <div key={item.id} className="bg-white p-4 rounded-lg shadow mb-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Navigation className="w-5 h-5 text-gray-400 mr-2" />
          <span className="text-sm font-medium text-gray-900">{item.title}</span>
          <span className="text-sm text-gray-500 ml-2">{item.path}</span>
        </div>
        <div>
          <button className="text-blue-600 hover:text-blue-900 mr-4">
            <Edit className="w-4 h-4" />
          </button>
          <button className="text-red-600 hover:text-red-900">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      {item.children?.length > 0 && (
        <div className="ml-8 mt-2 space-y-2">
          {item.children.map((child: any) => (
            <div key={child.id} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mr-2" />
              {renderMenuItem(child)}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Menu</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Menu Item
        </button>
      </div>

      <div className="space-y-4">
        {menuItems.map(renderMenuItem)}
      </div>
    </div>
  );
}