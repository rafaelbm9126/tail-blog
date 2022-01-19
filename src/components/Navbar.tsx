import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './Menu';
import { ProcessBar } from './ProcessBar';

export const Navbar: React.FunctionComponent<unknown> = () => {
 return (
  <>
   <nav id="header" className="fixed w-full z-10 top-0 bg-[#f8fafc]">
    <ProcessBar />

    <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
     <div className="pl-4">
      <Link
       className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"
       to="/"
      >
       Minimal Blog
      </Link>
     </div>

     <Menu />
    </div>
   </nav>
  </>
 );
};
