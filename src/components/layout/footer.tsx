import Link from 'next/link';
import { Mail } from 'lucide-react';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Pinterest', href: '#', icon: 'pinterest' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm dark:bg-gray-800 dark:border-gray-700"
            />
            <button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
              <Mail size={16} />
              Subscribe
            </button>
          </div>
        </div>
        
        <nav className="mb-8 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="mt-8 border-t border-gray-900/10 dark:border-gray-800 pt-8">
          <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Wavy Hair Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}