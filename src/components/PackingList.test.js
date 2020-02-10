import React from 'react';
import PackingList from './PackingList';
import {shallow} from 'enzyme';

it('renders without crashing', () =>{
    shallow(<PackingList familyList={[]} />);
})