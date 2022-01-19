import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from '../pages/abaut';

import { Index } from '../pages/index';

export const Routers: React.FunctionComponent<unknown> = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
