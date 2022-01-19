import React from 'react';

export const Resume: React.FunctionComponent<unknown> = (props) => {
 return (
  <>
   <p className="py-6 text-gray-500">
    👋 Welcome fellow{' '}
    <a
     className="text-green-500 no-underline hover:underline"
     href="https://www.tailwindcss.com"
    >
     Tailwind CSS
    </a>{' '}
    and miminal monochrome blog fan. This starter template provides a starting
    point to create your own minimal monochrome blog using Tailwind CSS and
    vanilla Javascript.
   </p>
  </>
 );
};
