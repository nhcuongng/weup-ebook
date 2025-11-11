'use client';

import './style.scss';

import clsx from 'clsx';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import type { MenuItem } from '@/components/Header/mock';
import { menuItems } from '@/components/Header/mock';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

import Container from '../ui/Container';

// Submenu Component
const SubMenu = ({ items }: { items: MenuItem[] }) => {
  const t = useTranslations('Navbar');

  return (
    <div className="absolute top-full left-0 mt-2 w-max bg-white rounded-md shadow-lg py-2 z-20 border border-gray-200">
      {items.map(item => (
        <a
          key={item.id}
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
        >
          {t(item.titleKey)}
        </a>
      ))}
    </div>
  );
};

// Main Navigation Bar Component
const Header = () => {
  const t = useTranslations('Navbar');
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (id: any) => {
    setOpenSubmenu(id);
  };

  const handleMouseLeave = () => {
    setOpenSubmenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="py-3.5 max-h-[100px] top-0 w-full z-1 header-background"
    >
      <Container
        isFullWidth
      >
        <div
          className="flex justify-between items-center content-medium-16"
        >
          {/* Logo */}
          <Link href="/">
            <div className="xl:h-[50px] h-[30px] w-auto">
              <img
                src="/assets/books/logo-E-learning.png"
                className="h-full"
                alt="WeUp E-Books Logo"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-16">
            {menuItems.map(item => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
              >
                <a
                  href={item.href}
                  className="flex items-center text-gray-700 border-b border-transparent hover:border-b hover:border-main-1 transition-colors duration-300
                  gap-1"
                >
                  {t(item.titleKey)}
                  {item.submenu && <Icon name="isax-arrow-down" size="base" /> }
                </a>
                {item.submenu && openSubmenu === item.id && (
                  <div onMouseLeave={handleMouseLeave}>
                    <SubMenu items={item.submenu} />
                  </div>
                )}
              </div>
            ))}
            <div className="hidden 2xl:flex items-center">
              <LocaleSwitcher />
            </div>
            <Button variant="default" size="lg">
              {t('sign_in')}
              {' '}
              /
              {' '}
              {t('sign_up')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-700 focus:outline-none cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                >
                </path>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Slider */}
          <div className={clsx('fixed inset-0 z-50 lg:hidden nav-bar', {
            'left-full': !isMobileMenuOpen,
            'left-0': isMobileMenuOpen,
          })}
          >
            {/* Backdrop */}
            {isMobileMenuOpen && (
              <div
                className="fixed inset-0 backdrop-opacity-30  bg-white/30"
                onClick={closeMobileMenu}
              >
              </div>
            )}

            {/* Slider */}
            <div className={
              clsx('fixed  overflow-auto top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out translate-x-[100%]', {
                'is-open': isMobileMenuOpen,
              })
            }
            >
              {/* Header */}
              <div className="flex sticky top-0 bg-white justify-between items-center p-4 border-b">
                <img
                  src="/assets/books/logo-E-learning.png"
                  className="h-[36px]"
                  alt="WeUp E-Books Logo"
                />
                <Icon
                  onClick={closeMobileMenu}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </Icon>
              </div>

              {/* Mobile Menu Items */}
              <nav className="flex flex-col p-4 space-y-4">
                {menuItems.map(item => (
                  <div key={item.id} className="border-b border-gray-100 pb-4">
                    <a
                      href={item.href}
                      className="flex items-center justify-between text-gray-700 hover:text-main-1 transition-colors duration-300 text-lg font-medium"
                      onClick={closeMobileMenu}
                    >
                      {t(item.titleKey)}
                      {item.submenu && <Icon name="isax-arrow-down" size="base" />}
                    </a>
                    {item.submenu && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.submenu.map(subItem => (
                          <a
                            key={subItem.id}
                            href={subItem.href}
                            className="block text-gray-600 hover:text-main-1 transition-colors duration-300"
                            onClick={closeMobileMenu}
                          >
                            {t(subItem.titleKey)}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Language Selector */}
                <div className="pt-4">
                  <LocaleSwitcher />
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button variant="default" size="lg" className="w-full">
                    {t('sign_in')}
                    {' '}
                    /
                    {' '}
                    {t('sign_up')}
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
