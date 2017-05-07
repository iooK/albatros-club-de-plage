import React from 'react';
import ReactDOM from 'react-dom';
import StandUpPaddle from './StandUpPaddle';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StandUpPaddle />, div);
});
