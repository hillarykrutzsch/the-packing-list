import React from 'react';
import TripBuilder from './TripBuilder';
import {shallow} from 'enzyme';

it('renders without crashing', () =>{
    shallow(<TripBuilder />);
})