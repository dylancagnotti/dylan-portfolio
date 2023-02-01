import React from 'react';
import '../../../utils/styles/flex.scss';
import HomeStyle from './Home.module.scss';
import PresentationWriter from '../../../components/homeTypewriter/HomeTyperwriter';
import ExperiencesList from '../../experiencesTable/ExperiencesList';

export const Home = () => {
  return (
    <div className={HomeStyle.homeWrapper}>
      <div className={HomeStyle.homeGrid}>
        <div className={HomeStyle.homeGridElement} id={HomeStyle.presentation}>
          <div className={HomeStyle.presentationContent} data-interactable>
            <PresentationWriter />
          </div>
        </div>
        <div className={HomeStyle.homeGridElement}>
          <ExperiencesList />
        </div>
      </div>
    </div>
  );
};
