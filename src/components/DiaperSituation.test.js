import React from 'react';
import DiaperSituation from './DiaperSituation';
import {shallow} from 'enzyme';

it('renders without crashing', () =>{
    shallow(<DiaperSituation childList={[]} />);
})