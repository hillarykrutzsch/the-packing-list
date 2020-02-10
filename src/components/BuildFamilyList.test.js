import React from 'react';
import BuildFamilyList from './BuildFamilyList';
import {shallow} from 'enzyme';

it('renders without crashing', () =>{
    shallow(<BuildFamilyList familyList={[]} />);
})