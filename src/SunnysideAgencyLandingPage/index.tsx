import React from 'react';
import Footer from './components/footer';
import Cards from './components/cards';
import Clients from './components/clients';
import Gallery from './components/gallery';
import Cover from './components/cover';

import { cards, clients, gallery } from './content';
import './index.scss';

const SunnysideAgencyLandingPage:React.FC = () => (
  <div className="SunnysideAgency w-full">
    <Cover />
    <Cards cards={cards} />
    <Clients clients={clients} />
    <Gallery gallery={gallery} />
    <Footer />
  </div>
);

export default SunnysideAgencyLandingPage;
