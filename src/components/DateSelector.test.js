import React from 'react';
import DateSelector from './DateSelector';
import {shallow} from 'enzyme';

it('renders without crashing', () =>{
    shallow(<DateSelector />);
})