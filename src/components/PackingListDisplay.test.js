import React from 'react';
import PackingListDisplay from './PackingListDisplay';
import {shallow} from 'enzyme';

it('renders without crashing', () =>{
    shallow(<PackingListDisplay />);
})