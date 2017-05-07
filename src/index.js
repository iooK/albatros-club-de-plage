import React from 'react';
import ReactDOM from 'react-dom';

import BeachClub from './app/BeachClub/BeachClub';
import Contact from './app/Contact/Contact';
import Fitness from './app/Fitness/Fitness';
import Navigation from './app/Navigation/Navigation';
import Partner from './app/Partner/Partner';
import StandUpPaddle from './app/StandUpPaddle/StandUpPaddle';
import SwimmingSchool from './app/SwimmingSchool/SwimmingSchool';
import Team from './app/Team/Team';

import './index.scss';

ReactDOM.render(
    <div>
        <Navigation />
        <BeachClub />
        <SwimmingSchool />
        <Fitness />
        <StandUpPaddle />
        <Team />
        <Contact />
        <Partner />
    </div>,
  document.getElementById('root')
);
