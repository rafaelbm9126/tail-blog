import React from 'react';
import { FooterExtra } from './FooterExtra';
import { Ribbon } from './Ribbon';
import { SocialNetwork } from './SocialNetwork';

export const Footer: React.FunctionComponent<unknown> = (props) => {
 return (
  <>
   <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
    <SocialNetwork />
    <Ribbon />
    <FooterExtra />
   </footer>
  </>
 );
};
