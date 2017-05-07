import React from 'react';
import ReactDOM from 'react-dom';
import BeachClub from './BeachClub';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BeachClub />, div);
});
