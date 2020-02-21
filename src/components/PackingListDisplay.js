import React from 'react';
import WeatherDisplay from './WeatherDisplay';
import PackingList from './PackingList';
import {connect} from 'react-redux';

class PackingListDisplay extends React.Component{
    render(){
        return (
            <div className="ui container">
                <h1>Here is your packing list:</h1>

                <PackingList  />

                <h2>Weather Info for {this.props.tripLocation}:</h2>
                <WeatherDisplay weatherData={this.props.weatherData} />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        tripLocation: state.tripLocation
    }
}

export default connect(mapStateToProps)(PackingListDisplay);