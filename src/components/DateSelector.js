import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { changeTripDates } from '../actions';

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
                <h1 style={{textAlign:'center'}}>What dates are you traveling?</h1>
                <div style={{textAlign:'center',margin:'2em 0'}}>
                <DateRangePicker
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={this.props.tripStartDate}
                    endDate={this.props.tripEndDate}
                    onDatesChange={({ startDate, endDate }) => { this.props.changeTripDates(startDate, endDate, this.props.numDays)}}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
                />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tripStartDate: state.tripStartDate,
        tripEndDate: state.tripEndDate,
        numDays: state.numDays
    }
}

export default connect(mapStateToProps, { changeTripDates })(DateSelector);