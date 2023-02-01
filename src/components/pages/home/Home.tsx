import React from 'react';
import '../../../utils/styles/flex.scss';
import HomeStyle from './Home.module.scss';
import PresentationWriter from '../../../components/homeTypewriter/HomeTyperwriter';

export const Home = () => {
  return (
    <div className={HomeStyle.homeWrapper}>
      <div className={HomeStyle.homeGrid}>
        <div className={HomeStyle.homeGridElement} id={HomeStyle.presentation}>
          <div data-interactable>
            <PresentationWriter />
          </div>
        </div>
        <div className={HomeStyle.homeGridElement}>
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
};
