import React from 'react';
import WeatherDisplay from './WeatherDisplay';
import PackingList from './PackingList';

class PackingListDisplay extends React.Component{
    render(){
        return (
            <div className="ui container">
                <h1>Here is your packing list:</h1>

                <PackingList 
                    familyList={this.props.familyList} 
                />

                <h2>Weather Info:</h2>
                <WeatherDisplay weatherData={this.props.weatherData} />

            </div>
        );
    }
}

export default PackingListDisplay;