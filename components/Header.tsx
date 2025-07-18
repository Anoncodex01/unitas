'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/mission', label: 'Mission' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-white/90 backdrop-blur-md rounded-full px-8 py-4 shadow-lg border border-gray-200">
        <ul className="flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600 relative",
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-700"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;