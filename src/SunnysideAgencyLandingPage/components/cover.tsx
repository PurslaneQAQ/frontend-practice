import React from 'react';
import Nav from './nav';
import HeaderImg from '../images/desktop/image-header.jpg';
import ArrowDown from '../images/icon-arrow-down.svg';

const Cover:React.FC = () => (
  <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${HeaderImg})`, maxHeight: '140vw' }}>
    <Nav />
    <h1 className="h-1/3 px-8 flex items-center justify-center lg:text-3xl md:text-2xl text-xl font-black text-white">
      We are creatives
    </h1>
    <img
      className="absolute top-1/2 left-1/2 transform h-16 md:h-20 xl:h-24 -translate-y-1/3 -translate-x-1/2"
      alt="arrow"
      src={ArrowDown}
    />
  </div>
);

export default Cover;
