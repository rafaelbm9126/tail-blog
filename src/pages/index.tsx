import React from 'react';
import { Navbar } from '../components/Navbar';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';

export const Index: React.FunctionComponent<unknown> = (_props) => {
 return (
  <>
   <Navbar />
   <Container />
   <Footer />
  </>
 );
};
