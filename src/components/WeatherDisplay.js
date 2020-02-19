import React from 'react';
import { connect } from 'react-redux';

class WeatherDisplay extends React.Component{

    render(){
        const weatherData = this.props.weatherData.map((day, index) => (
            <p key={index}>Day {index}: Temp: {day.temp}, High: {day.max_temp}, Low: {day.low_temp}</p>
        ));

        return (
            <div className="ui container" style={{marginTop:'30px'}}>
                {weatherData}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { weatherData: state.weatherData }
}

export default connect(mapStateToProps)(WeatherDisplay);