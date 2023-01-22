import React, { useEffect } from 'react';
import MouseTrailStyle from './MouseTrail.module.scss';

export const MouseTrail = () => {
  const followAnimDuration = 900;
  const stepOutAnimDuration = 300;

  function onMouseEnterBody(event: MouseEvent) {
    const mouseTrail = document.getElementById('mouseTrail');
    const frames = {
      backgroundColor: `rgba(255,255,255,1)`,
    };
    if (!mouseTrail) return;

    const x = event.clientX - mouseTrail.offsetWidth / 2;
    const y = event.clientY - mouseTrail.offsetHeight / 2;
    mouseTrail.animate(frames, {
      duration: followAnimDuration,
      fill: 'forwards',
    });
    mouseTrail.animate(
      { transform: `translate(${x}px, ${y}px)` },
      {
        duration: 0,
        fill: 'forwards',
      }
    );
  }

  function onMouseExitBody() {
    const mouseTrail = document.querySelector('#mouseTrail');
    const frames: PropertyIndexedKeyframes = {
      backgroundColor: `rgba(255,255,255,0)`,
    };
    if (!mouseTrail) return;
    mouseTrail.animate(frames, {
      duration: followAnimDuration,
      fill: 'forwards',
    });
  }

  function handleMouseMove(event: MouseEvent) {
    if (!event || !event.target) return;
    if (event.target instanceof Element) {
      const hoveringElement = event.target.closest('[data-interactable]');
      if (!hoveringElement) trailerFollowMouse(event);
      else {
        const textPopup = hoveringElement.getAttribute('data-text-popup');
        trailerStepOut(event, textPopup);
      }
    } else {
      trailerFollowMouse(event);
    }
  }

  function trailerStepOut(event: MouseEvent, textPopup: string | null) {
    const mouseTrail = document.querySelector(
      '#mouseTrail'
    ) as HTMLElement | null;
    if (!mouseTrail) return;
    const x = event.clientX + mouseTrail.offsetWidth / 2;
    const y = event.clientY + mouseTrail.offsetHeight / 2;

    let frames: PropertyIndexedKeyframes = {
      transform: `translate(${x}px, ${y}px)`,
      width: '30px',
      height: '30px',
      backgroundColor: `rgba(255,255,255,1)`,
    };

    let txt = '';

    if (textPopup) {
      frames = {
        transform: `translate(${x}px, ${y}px)`,
        color: 'black',
        width: '60px',
        height: '60px',
        backgroundColor: `rgba(255,255,255,1)`,
      };
      txt = textPopup;
    }

    animateElementById('#mouseTrail', frames, stepOutAnimDuration);

    mouseTrail.textContent = txt;
  }

  function trailerFollowMouse(event: MouseEvent) {
    const mouseTrail = document.querySelector(
      '#mouseTrail'
    ) as HTMLElement | null;
    if (!mouseTrail) return;
    const x = event.clientX - mouseTrail.offsetWidth / 2;
    const y = event.clientY - mouseTrail.offsetHeight / 2;

    const frames: PropertyIndexedKeyframes = {
      transform: `translate(${x}px, ${y}px)`,
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: `rgba(255,255,255,1)`,
    };

    mouseTrail.textContent = '';

    animateElementById('#mouseTrail', frames, followAnimDuration);
  }

  function animateElementById(
    id: string,
    frames: PropertyIndexedKeyframes,
    duration: number
  ) {
    //get the trailer
    const element = document.querySelector(id);

    if (!element) return;

    element.animate(frames, { duration: duration, fill: 'forwards' });
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', onMouseEnterBody);
    document.body.addEventListener('mouseleave', onMouseExitBody);
  }, []);

  return <div className={MouseTrailStyle.mouseFollower} id="mouseTrail"></div>;
};
