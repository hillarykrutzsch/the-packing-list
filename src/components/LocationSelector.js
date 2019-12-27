import React from 'react';

class LocationSelector extends React.Component{
    render(){
        return(
            <div style={{border: '1px solid black', margin: '1em 0', padding: '1em'}}>
                <h1>Where are you going?</h1>
                <form className="ui form" onSubmit={this.props.onLocationSubmit}>
                    <div className="field">
                        <label>Zip code</label>
                        <input 
                            type="text" 
                            value={this.props.zipcode}
                            onChange={(e) => this.props.updateLocation(e.target.value)}
                        />
                    </div>
                    <button type="submit">Generate Packing List</button>
                </form>
            </div>
        );
    }
}

export default LocationSelector;