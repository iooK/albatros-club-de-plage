import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

it('renders without crashing without data', () => {
    const div = document.createElement('div');
    const data = [];

    ReactDOM.render(<Table data={data} />, div);
});

it('renders without crashing with data', () => {
    const div = document.createElement('div');
    const data = [[
        '0', '1',
    ], [
        '0', '1',
    ]];

    ReactDOM.render(<Table data={data} />, div);
});
