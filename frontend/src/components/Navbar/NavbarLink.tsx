import React from 'react';

interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, children }) => (
  <li><a href={href}>{children}</a></li>
);

export default NavbarLink;