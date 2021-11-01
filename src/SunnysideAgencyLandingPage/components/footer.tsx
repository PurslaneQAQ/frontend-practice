import React, { ReactElement } from 'react';
import CommonFooter from '../../components/footer';

import facebookIcon from '../images/icon-facebook.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import twitterIcon from '../images/icon-twitter.svg';
import instagramIcon from '../images/icon-instagram.svg';
import InteractiveIcon, { InteractiveIconProps } from './interactiveIcon';

const FooterItem:React.FC<{children: string|ReactElement|ReactElement[]}> = ({ children }) => (
  <div className="lg:w-32 w-28 opacity-60 transition hover:text-white hover:opacity-100 cursor-pointer">
    {children}
  </div>
);

const icons = [
  { imgUrl: facebookIcon, alt: 'facebook' },
  { imgUrl: pinterestIcon, alt: 'pinterest' },
  { imgUrl: twitterIcon, alt: 'twitter' },
  { imgUrl: instagramIcon, alt: 'instagram' },
];

const Footer:React.FC = () => (
  <div className="pt-16 lg:pt-24 sa-bg-moderate-cyan sa-text-dark-cyan text-center">
    <div className="mb-8 lg:mb-12  font-extrabold lg:text-xl text-lg opacity-80">sunnyside</div>
    <div className="mb-16 lg:mb-24 flex justify-center lg:text-md text-base">
      <FooterItem>About</FooterItem>
      <FooterItem>Services</FooterItem>
      <FooterItem>Projects</FooterItem>
    </div>
    <div className="mb-12 lg:mb-16 flex justify-center items-center">
      {icons.map((props: InteractiveIconProps) => (
        <div className="mx-4" key={props.alt}><InteractiveIcon {...props} /></div>
      ))}
    </div>
    <CommonFooter />
  </div>
);

export default Footer;
