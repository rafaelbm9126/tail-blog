import React from 'react';
import { BackTo } from './BackTo';

export const TitlePost: React.FunctionComponent<unknown> = (props) => {
 return (
  <>
   <div className="font-sans">
    <BackTo />
    <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
     Welcome to Minimal Blog
    </h1>
    <p className="text-sm md:text-base font-normal text-gray-600">
     Published 19 February 2019
    </p>
   </div>
  </>
 );
};
