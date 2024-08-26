import React, { useState } from 'react';

interface SidebarProps {
  categories: string[];
  onCategorySelect: (category: string | null) => void; // Allow null for "All Products"
}

const Sidebar: React.FC<SidebarProps> = ({ categories, onCategorySelect }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  return (
    <div style={{
      width: '200px',
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      borderRight: '1px solid #ddd',
      padding: '10px',
      backgroundColor: '#f9f9f9',
      overflowY: 'auto' // Allow scrolling if the list is too long
    }}>
      <h2>Categories</h2>
      <button
        onClick={() => {
          onCategorySelect(null); // Show all products
          toggleDropdown(); // Toggle dropdown visibility
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '5px 0',
          padding: '10px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        <span>{isDropdownOpen ? 'Hide Categories' : 'Get All Products'}</span>
        <span style={{
          marginLeft: '10px',
          transition: 'transform 0.3s ease'
        }}>
          {isDropdownOpen ? '▲' : '▼'}
        </span>
      </button>
      {isDropdownOpen && (
        <ul style={{
          listStyleType: 'none',
          padding: '0',
          marginTop: '10px'
        }}>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => onCategorySelect(category)}
              style={{
                cursor: 'pointer',
                margin: '5px 0',
                padding: '10px',
                backgroundColor: '#e9ecef',
                borderRadius: '4px'
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
