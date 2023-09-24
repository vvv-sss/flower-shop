import {FontIcon, NavLink} from '@atoms';
import {useMediaQuery} from '@hooks';
import React from 'react';
import {Link} from 'react-router-dom';

type NavItem = {
  title: string;
  href: string;
  classes: string;
};

export const Header: React.FC = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  const baseItemClasses = 'flex-1 max-w-[180px] px-[24px] py-[32px] list-none';
  const baseItemClassesWithRightBorder = `${baseItemClasses} border-r border-brand-black`;
  const baseItemClassesWithLeftBorder = `${baseItemClasses} border-l border-brand-black`;

  const navItems: NavItem[] = [
    {
      title: 'Shop',
      href: '#',
      classes: baseItemClassesWithRightBorder,
    },
    {
      title: 'Contact',
      href: '#',
      classes: baseItemClassesWithRightBorder + ' mr-auto',
    },
    {
      title: 'Sign In',
      href: '#',
      classes: baseItemClassesWithLeftBorder,
    },
    {
      title: 'Cart',
      href: '#',
      classes: baseItemClassesWithLeftBorder,
    },
  ];

  const handleMenuButtonClick = () => {
    console.log('🔴 🔴', 'menu clicked'); // XXX remove
  };

  return (
    <nav className="sticky inset-x-0 top-0 z-50 flex flex-row bg-white border border-brand-black">
      {matches ? (
        <ul className="flex flex-row w-full">
          {navItems.map((item, index) => {
            return (
              <li
                key={`${item.title}-${index}`}
                className={item.classes}>
                <NavLink
                  title={item.title}
                  href={item.href}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <>
          <button
            className="p-3 border-r border-brand-black sm:p-4"
            onClick={handleMenuButtonClick}>
            <FontIcon name="menu-300" />
          </button>
          <div className="flex-1" />
          <Link
            to="/"
            className="p-3 border-l border-brand-black sm:p-4">
            <FontIcon name="shopping-bag-300" />
          </Link>
        </>
      )}
    </nav>
  );
};
