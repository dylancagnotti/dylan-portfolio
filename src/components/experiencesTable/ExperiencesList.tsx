import React from 'react';
import ListStyle from './ExperiencesList.module.scss';

const ExperiencesList = () => {
  return (
    <div className={ListStyle.container}>
      <ul className={ListStyle.list}>
        <li className={ListStyle.element}>
          <div>
            <h2>Skills</h2>
            <div className={ListStyle.elementContent}>Test</div>
          </div>
        </li>
        <li className={ListStyle.element}>
          <div>
            <h2>Skills</h2>
            <div className={ListStyle.elementContent}>Test</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ExperiencesList;
