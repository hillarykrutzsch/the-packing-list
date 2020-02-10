import React from 'react';
import WeatherDisplay from './WeatherDisplay';
import {shallow} from 'enzyme';

it('renders without crashing', () =>{
    shallow(<WeatherDisplay weatherData={[]} />);
})