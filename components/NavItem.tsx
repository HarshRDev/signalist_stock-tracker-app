'use client'
import { Nav_ITEMS } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { use } from 'react'


const NavItem = () => {
  const pathName: string = usePathname();

  const isActive =(path: string) => {
    if( path === '/' ) return pathName === '/'

    return pathName.startsWith(path);
  };
  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium '>
      {Nav_ITEMS.map(({href,label}) => (
        <li key={href} className='nav-item'>
          <Link href={href} className={`hover:text-yellow-500 transition-colors ${isActive(href) ? "text-grey-100" : '' }`}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavItem