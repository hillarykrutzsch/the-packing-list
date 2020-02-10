import React from 'react';
import LocationSelector from './LocationSelector';
import {shallow} from 'enzyme';

it('renders without crashing', () =>{
    shallow(<LocationSelector />);
})