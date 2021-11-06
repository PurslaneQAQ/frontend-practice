import React from 'react';

export type FooterProps = {
  className?: string;
};

const Footer:React.FC<FooterProps> = ({ className = '' }) => (
  <div className={`h-8 leading-8 text-mini font-light ${className}`}>
    <span className="opacity-40">
      {'Challenge by '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>
      .
      {' Coded by '}
      <a href="http://portfolio.yaorui.info">Yaorui</a>
      .
    </span>
  </div>
);

export default Footer;
