import React from 'react';
import './index.scss';

export type CardType = {
  bgImage?: string;
  bgColor?: string;
  text?: {
    title: string;
    content: string;
    color?: string;
  }
  learnMore?: {
    activeColor: string;
  }
};

const Card:React.FC<CardType&{index:number}> = ({
  bgImage, bgColor, text, learnMore, index,
}) => (
  <div
    style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    className={`
      ${bgColor ? `sa-bg-${bgColor}` : 'bg-white'}
      sa-card${bgImage ? '-with-bg' : ''}
    `}
  >
    {text && (
      <div className={`${bgImage ? 'sa-card-with-bg__text-container'
        : `${Math.floor(index / 2) % 2 ? 'xl:pr-32 2xl:pr40' : 'xl:pl-32 2xl:pl-40'} sa-card__text-container`}`}
      >
        <h3 className={`${text.color ? `sa-text-${text.color} opacity-70` : ''} sa-font-serif`}>{text.title}</h3>
        <p className={`${text.color ? `sa-text-${text.color} opacity-50` : 'sa-text-dark-tertiary'}`}>{text.content}</p>
        {learnMore && (
          <button
            type="button"
            className={`sa-more-${learnMore.activeColor} sa-more sa-font-serif mt-8`}
          >
            Learn More
          </button>
        )}
      </div>
    )}
  </div>

);
const Cards:React.FC<{cards:CardType[]}> = ({ cards }) => (
  <div className="sa-card-grid grid grid-cols-1 md:grid-cols-2 grid-flow-row-dense text-black">
    {cards.map((card, i) => <Card key={i} index={i} {...card} />)}
  </div>
);

export default Cards;
