import React from 'react';
import { Author } from './Author';
import { Blockquote } from './Blockquote';
import { NewsLetter } from './NewsLetter';
import { NextPrevLink } from './NextPrevLink';
import { Resume } from './Resume';
import { Tags } from './Tags';
import { TitlePost } from './TitlePost';

import AwayImage from '../assets/away.png';

export const Container: React.FunctionComponent<unknown> = () => {
 return (
  <>
   <div className="container w-full md:max-w-3xl mx-auto pt-20">
    <div
     className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
     style={{ fontFamily: 'Georgia,serif' }}
    >
     {/* <!--Title--> */}
     <TitlePost />

     {/* <!--Resume--> */}
     <Resume />

     <h1 className="py-2 font-sans">SubTitle 1</h1>

     <p className="py-6">
      The basic blog page layout is available and all using the default Tailwind
      CSS classNamees (although there are a few hardcoded style tags). If you
      are going to use this in your project, you will want to convert the
      classNamees into components.
     </p>

     <img className="inline rounded-sm m-2" src={AwayImage} alt="Image Paragrahp" />
     
     <Blockquote />

    </div>

    {/* <!--Tags --> */}
    <Tags />

    {/* <!--Divider--> */}
    <hr className="border-b-2 border-gray-400 mb-8 mx-4" />

    {/* <!--Subscribe--> */}
    <NewsLetter />

    {/* <!--Author--> */}
    <Author />

    {/* <!--Divider--> */}
    <hr className="border-b-2 border-gray-400 mb-8 mx-4" />

    {/* <!--Next & Prev Links--> */}
    <NextPrevLink />

   </div>
  </>
 );
};
