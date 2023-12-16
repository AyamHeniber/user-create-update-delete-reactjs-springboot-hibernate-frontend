import React from 'react';

const HeaderComponent = () => {
  return (
    <header className="bg-gray-300 p-3">
      <div className="container mx-auto flex items-center justify-center">

        <nav className="space-x-1">
          <a href="#" className="text-black-300 text-xl fold-bold hover:text-blue-600 transition duration-30">User Management</a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
