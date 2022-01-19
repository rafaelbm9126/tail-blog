import React from 'react';
import { Link } from 'react-router-dom';

export const Ribbon: React.FunctionComponent<unknown> = (_props) => {
 return (
  <>
   <div className="text-center p-6 bg-gray-200">
    <span>© 2021 Copyright:</span>
    <Link className="text-gray-600 font-semibold" to="/">
     BlogWork
    </Link>
   </div>
  </>
 );
};
