import React from 'react';

export const BackTo: React.FunctionComponent<unknown> = (props) => {
 return (
  <>
   <p className="text-base md:text-sm text-green-500 font-bold">
    &lt;{' '}
    <a
     href="#"
     className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
    >
     BACK TO BLOG
    </a>
   </p>
  </>
 );
};
