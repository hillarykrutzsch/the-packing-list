import React from 'react';
import TripBuilder from './TripBuilder';
import PackingListDisplay from './PackingListDisplay';
import './styles/App.scss';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends React.Component{
    render(){
        return (
            <div style={{marginTop:'40px'}}>
                <BrowserRouter>
                    <Route path="/" exact component={TripBuilder} />
                    <Route path="/list" exact component={PackingListDisplay} />
                </BrowserRouter>  
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