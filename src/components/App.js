import React from 'react';
import TripBuilder from './TripBuilder';
import moment from 'moment';
import PackingListDisplay from './PackingListDisplay';
import './styles/App.scss';
import { connect } from 'react-redux';


class App extends React.Component{
    constructor(props){
        super(props);
        this.idCounter = 0;
        this.state = {
            tripStartDate: null,
            tripEndDate: null,
            numDays:0
        }
    }

    onDatesChange = (tripStartDate, tripEndDate) => {
        let numDays = this.state.numDays;
        if(tripStartDate && tripEndDate){
            let a = moment(tripStartDate._d).format("YYYY/MM/DD");
            console.log(a);
            let b = moment(tripEndDate._d).format("YYYY/MM/DD");
            console.log(b);
            numDays = moment(b).diff(moment(a), 'days');
        } 
        this.setState({ tripStartDate, tripEndDate, numDays   });
    }

    render(){
        return (
            <div style={{marginTop:'40px'}}>
                {this.props.appView === 'trip_builder' ? (
                    <TripBuilder 
                        tripStartDate={this.state.tripStartDate}
                        tripEndDate={this.state.tripEndDate}
                        onDatesChange={this.onDatesChange}
                    />
                ) : 
                (
                    <PackingListDisplay 
                        numDays={this.state.numDays}
                    />
                )}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        appView: state.appView 
    }
}

export default connect(mapStateToProps)(App);