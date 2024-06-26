import React from 'react';

interface NavbarDropdownProps {
  title: string;
  children: React.ReactNode;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ title, children }) => (
  <li>
    <details>
      <summary>{title}</summary>
      <ul className="bg-base-100 rounded-t-none p-2">
        {children}
      </ul>
    </details>
  </li>
);

export default NavbarDropdown;