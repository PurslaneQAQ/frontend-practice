import transformImage from './images/desktop/image-transform.jpg';
import standOutImage from './images/desktop/image-stand-out.jpg';
import graphicDesignImage from './images/desktop/image-graphic-design.jpg';
import photographyImage from './images/desktop/image-photography.jpg';

import emilyImage from './images/image-emily.jpg';
import jennieImage from './images/image-jennie.jpg';
import thomasImage from './images/image-thomas.jpg';

import coneImage from './images/desktop/image-gallery-cone.jpg';
import milkbottlesImage from './images/desktop/image-gallery-milkbottles.jpg';
import orangeImage from './images/desktop/image-gallery-orange.jpg';
import sugarcubesImage from './images/desktop/image-gallery-sugarcubes.jpg';

export const cards = [
  {
    bgImage: transformImage,
    bgColor: 'yellow',
  },
  {
    text: {
      title: 'Transform Your Brand',
      content: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. ',
    },
    learnMore: {
      activeColor: 'yellow',
    },
  },
  {
    bgImage: standOutImage,
    bgColor: 'soft-red',
  },
  {
    text: {
      title: 'Stand out to the right audience',
      content: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we\'ll build and extend your brand in digital places ',
    },
    learnMore: {
      activeColor: 'soft-red',
    },
  },
  {
    text: {
      title: 'Graphic Design',
      content: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients\' attention. ',
      color: 'dart-cyan',
    },
    bgImage: graphicDesignImage,
  },
  {
    text: {
      title: 'Photography',
      color: 'dart-blue',
      content: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
    },
    bgImage: photographyImage,
  },
];

export const clients = [
  {
    avatar: emilyImage,
    clientName: 'Emily R.',
    desc: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    role: 'Marketing Director',
  },
  {
    avatar: thomasImage,
    clientName: 'Thomas S.',
    desc: 'Sunnyside\'s enthusiasm coupled with their keen interest in our brand\'s success made it a satisfying and enjoyable experience.',
    role: 'Chief Operating Officer',
  },
  {
    avatar: jennieImage,
    clientName: 'Jennie F.',
    desc: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    role: 'Business Owner',
  },
];

export const gallery = [
  { imageUrl: milkbottlesImage },
  { imageUrl: orangeImage },
  { imageUrl: coneImage },
  { imageUrl: sugarcubesImage },
];
