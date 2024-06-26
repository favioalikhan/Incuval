import React from 'react';

interface AvatarDropdownProps {
  imageUrl: string;
  children: React.ReactNode;
}

const AvatarDropdown: React.FC<AvatarDropdownProps> = ({ imageUrl, children }) => (
  <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="Avatar" src={imageUrl} />
      </div>
    </div>
    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {children}
    </ul>
  </div>
);

export default AvatarDropdown;