import React from 'react';
import TripBuilder from './TripBuilder';
import {shallow} from 'enzyme';

describe('TripBuilder tests', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<TripBuilder />);
    });

    it("should match the snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    it('should start at page 1', () => {
        expect(wrapper.state('currentPage')).toEqual(1);
    });
    
    it('should increase page count by 2 if no children are in familyList', () => {
        wrapper.setState({
            currentPage: 1
        });
        wrapper.setProps({
            familyList: [{id:  1,type:'adult'},{id:  2,type:'adult'}]
        });
        wrapper.find('button.btn-next').first().simulate('click');
        expect(wrapper.state('currentPage')).toEqual(3);
    });
    
    it('should decrease page count by 2 if no children are in familyList', () => {
        wrapper.setState({
            currentPage: 3
        });
        wrapper.setProps({
            familyList: [{id:  1,type:'adult'},{id:  2,type:'adult'}]
        });
        wrapper.find('button.btn-back').first().simulate('click');
        expect(wrapper.state('currentPage')).toEqual(1);
    });

    it('should increase page count by 1 if children are in familyList', () => {
        wrapper.setState({
            currentPage: 1
        });
        wrapper.setProps({
            familyList: [{id:  1,type:'adult'},{id:  2,type:'child'}]
        });
        wrapper.find('button.btn-next').first().simulate('click');
        expect(wrapper.state('currentPage')).toEqual(2);
    });

    it('should decrease page count by 1 if children are in familyList', () => {
        wrapper.setState({
            currentPage: 3
        });
        wrapper.setProps({
            familyList: [{id:  1,type:'adult'},{id:  2,type:'child'}]
        });
        wrapper.find('button.btn-back').first().simulate('click');
        expect(wrapper.state('currentPage')).toEqual(2);
    });
});

