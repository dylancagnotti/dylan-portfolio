import React from 'react';
import Typewriter from 'typewriter-effect';

const HomeTyperwriter = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString('let ')
          .typeString("<span style='color: white'>me</span> = {")
          .pauseFor(300)
          .changeDelay(45)
          .typeString('<br /> &nbsp;&nbsp; name: ')
          .pauseFor(100)
          .pasteString(
            '<span style=\'color: white\'>"Dylan Cagnotti"</span>,',
            null
          )
          .pauseFor(250)
          .typeString('<br /> &nbsp;&nbsp; location: ')
          .pauseFor(90)
          .pasteString(
            '<span style=\'color: white\'>"Milan, Italy"</span>,',
            null
          )
          .pauseFor(320)
          .typeString('<br /> &nbsp;&nbsp; role: ')
          .pauseFor(110)
          .pasteString(
            '<span style=\'color: white\'>"Frontend Dev"</span>,',
            null
          )
          .pauseFor(290)
          .typeString('<br /> &nbsp;&nbsp; skills: ')
          .typeString('[<span style=\'color: white\'>"CSS"</span>, ')
          .typeString('<span style=\'color: white\'>"TypeScript"</span>, ')
          .typeString('<span style=\'color: white\'>"React"</span>]')
          .pauseFor(200)
          .changeDelay('natural')
          .typeString('<br /> };')
          .start();
      }}
    />
  );
};

export default HomeTyperwriter;
