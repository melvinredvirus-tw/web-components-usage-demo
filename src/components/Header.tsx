'use client';

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        <Link href="/">
          <AppShortcutIcon /> Flowbite
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex space-x-6">
        <Link href="/about">About</Link>
        <Link href="/category">Categories</Link>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <IconButton onClick={toggleMenu} className="text-white">
          {menuOpen ? <CloseIcon htmlColor="#fff" /> : <MenuIcon htmlColor="#fff" />}
        </IconButton>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-gray-900 text-white flex flex-col space-y-4 p-4 rounded shadow-lg lg:hidden">
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/category" onClick={() => setMenuOpen(false)}>
            Categories
          </Link>
        </div>
      )}
    </header>
  );
}
