import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Menu: React.FunctionComponent<unknown> = (props) => {
 const ref = React.useRef(null);
 const location = useLocation();
 const listMenu = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Link', to: '/#' },
  { label: 'Link', to: '/#' },
  { label: 'Link', to: '/#' },
 ];
 return (
  <>
   <div className="block lg:hidden pr-4">
    <button
     className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
     onClick={() => {
      if (ref) {
       (ref.current as any).classList.toggle('hidden');
      }
     }}
    >
     <svg
      className="fill-current h-3 w-3"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
     >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
     </svg>
    </button>
   </div>
   <div
    className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
    ref={ref}
   >
    <ul className="list-reset lg:flex justify-end flex-1 items-center">
      {
        listMenu.map((menu) =>
          <li className="mr-3">
            <Link
            className={`
              inline-block py-2 px-4 text-gray-900 no-underline
              ${
                location.pathname === menu.to ?
                  'font-bold' :
                  'hover:text-gray-900 hover:text-underline'
              }
            `}
            to={menu.to}
            >
            {menu.label}
            </Link>
          </li>
        )
      }
    </ul>
   </div>
  </>
 );
};
