import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

class DateSelector extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            focusedInput: null,
        };
    }
    render(){
        return (
            <div>
                <h1>What dates are you traveling?</h1>
                <DateRangePicker
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={this.props.tripStartDate}
                    endDate={this.props.tripEndDate}
                    onDatesChange={({ startDate, endDate }) => { this.props.onDatesChange(startDate, endDate)}}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
                />
            </div>
        );
    }
}

export default DateSelector;