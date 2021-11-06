import React from 'react';
import './index.scss';

export type InteractiveIconProps = {
  imgUrl: string;
  alt: string;
};

const InteractiveIcon:React.FC<InteractiveIconProps> = ({ imgUrl, alt }) => (
  <div className="sa-interactive-icon">
    <img className="sa-interactive-icon-origin" alt={`icon-${alt}`} src={imgUrl} />
    <img className="sa-interactive-icon-duplicate" alt={`icon-${alt}`} src={imgUrl} />
  </div>
);

export default InteractiveIcon;
