import React from 'react';
import ReactDOM from 'react-dom';
import Partner from './Partner';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Partner />, div);
});
