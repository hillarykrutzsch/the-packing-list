import React from 'react';
import WeatherDisplay from './WeatherDisplay';

class PackingListDisplay extends React.Component{
    render(){
        return (
            <div>
                <h1>Here is your packing list:</h1>
                <WeatherDisplay weatherData={this.props.weatherData} />
            </div>
        );
    }
}

export default PackingListDisplay;