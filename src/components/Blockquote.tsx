import React from 'react';

export const Blockquote: React.FunctionComponent<unknown> = (props) => {
 return (
  <>
   <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
    Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
   </blockquote>
  </>
 );
};
