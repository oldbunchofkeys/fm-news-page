import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav.tsx';
import Article from './Article.tsx';
import New from './New.tsx';
import Card from './Card.tsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
    <div className='px-40 pt-24'>
      <Nav logoImageSrc={'../public/images/logo.svg'} />
      <div className='flex'>
        <Article articleImageSrc={'../public/images/image-web-3-desktop.jpg'} />
        <New />
      </div>
      <div className='flex'>
        <Card 
          cardImageSrc={'../public/images/image-retro-pcs.jpg'} 
          cardImageAlt={'old school computer gear'} 
          numberedHeading={'01'} 
          textHeading={'Reviving Retro PCs'} 
          textBody={'What happens when old PCs are given modern upgrades?'}
        />
        <Card 
          cardImageSrc={'../public/images/image-top-laptops.jpg'} 
          cardImageAlt={'closeup of a laptop keyboard'} 
          numberedHeading={'02'} 
          textHeading={'Top 10 Laptops of 2022'}
          textBody={'Our best picks for various needs and budgets.'} 
        />
        <Card 
          cardImageSrc={'../public/images/image-gaming-growth.jpg'}
          cardImageAlt={'a playstation controller floating above a hand'}
          numberedHeading={'03'}
          textHeading={'The Growth of Gaming'}
          textBody={'How the pandemic has sparked fresh opportunities.'}
        />
      </div>
    </div>
  </React.StrictMode>,
);