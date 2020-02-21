import React from 'react';
import TripBuilder from './TripBuilder';
import PackingListDisplay from './PackingListDisplay';
import './styles/App.scss';
import { connect } from 'react-redux';


class App extends React.Component{
    render(){
        return (
            <div style={{marginTop:'40px'}}>
                {this.props.appView === 'trip_builder' ? (
                    <TripBuilder />
                ) : 
                (
                    <PackingListDisplay />
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