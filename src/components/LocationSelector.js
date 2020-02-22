import React from 'react';
import { connect } from 'react-redux';
import { getWeatherAtLocation, setAppViewToPackingList, updateTripLocation } from '../actions';
import { withRouter } from 'react-router-dom';

class LocationSelector extends React.Component{
  

    getWeather = (e) => {
        e.preventDefault();
        this.props.getWeatherAtLocation();
        this.props.history.push('/list');
        //this.props.setAppViewToPackingList();
    }

    render(){
        return(
            <div style={{margin: '1em 0', padding: '1em'}}>
                <h1 style={{textAlign:'center'}}>Where are you going?</h1>
                <div style={{width:'200px', margin:'2em auto'}}>
                    <form className="ui form" onSubmit={this.getWeather}>
                        <div className="field">
                            <label>Zip code</label>
                            <input 
                                type="text" 
                                value={this.props.zipcode}
                                onChange={(e) => this.props.updateTripLocation(e.target.value)}
                            />
                        </div>
                        <button type="submit">Generate Packing List</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, { getWeatherAtLocation, setAppViewToPackingList, updateTripLocation })(withRouter(LocationSelector));