import React from 'react';
import ReactDOM from 'react-dom';
import SwimmingSchool from './SwimmingSchool';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SwimmingSchool />, div);
});
