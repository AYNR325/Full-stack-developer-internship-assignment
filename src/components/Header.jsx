import React from 'react';

const Header = () => {
  return (
    <header className="mb-8 py-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 m-0">
        Donation Tracking Dashboard
      </h1>
      <p className="text-gray-500 text-base mt-2">
        Overview of recent donations and donor activity.
      </p>
    </header>
  );
};

export default Header;
