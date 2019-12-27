import React from 'react';
import TripBuilder from './TripBuilder';

import * as apiCalls from '../api';

class App extends React.Component{
    constructor(props){
        super(props);
        this.idCounter = 0;
        this.state = {
            familyMembers: [],
            tripStartDate: null,
            tripEndDate: null,
            tripLocation: null,
            weatherData: null
        }
        this.getWeatherAtLocation = this.getWeatherAtLocation.bind(this);
    }
    
    async getWeatherAtLocation(){
		let weatherData = await apiCalls.getWeatherAtLocation(this.state.tripLocation);
		this.setState({weatherData});
	}

    addMember = (memberType) => {
        let newMember = {
            id:  this.idCounter++,
            type:memberType
        };
        if(memberType==='child'){
            newMember.diapers = 'diapers';
        }
        this.setState({
            familyMembers: [...this.state.familyMembers, newMember]
        });
    }
    removeMember = (memberType) => {
        const foundMember = this.state.familyMembers.find(member => member.type === memberType);
        if(foundMember){
            const familyMembers = this.state.familyMembers.filter(member => {
                return member.id !== foundMember.id;
            });
            this.setState({familyMembers});
        }
        
    }
    updateDiaperSituation = (value, memberID) => {
        const familyMembers = this.state.familyMembers.map(member => {
			if(member.id === memberID){
				return {...member, diapers:value}
			}
			else{
				return member;
			}
		})
		this.setState({familyMembers});
    }

    onDatesChange = (tripStartDate, tripEndDate) => {
        this.setState({ tripStartDate, tripEndDate   });
    }

    updateLocation = (tripLocation) => {
        this.setState({tripLocation})
    }

    onLocationSubmit = (e) => {
        e.preventDefault();
        this.getWeatherAtLocation();
    }

    render(){
        return (
            <div style={{marginTop:'40px'}}>
                <TripBuilder 
                    familyList={this.state.familyMembers}
                    tripStartDate={this.state.tripStartDate}
                    tripEndDate={this.state.tripEndDate}
                    addMember={this.addMember} 
                    removeMember={this.removeMember}  
                    updateDiaperSituation={this.updateDiaperSituation}
                    onDatesChange={this.onDatesChange}
                    updateLocation={this.updateLocation}
                    onLocationSubmit={this.onLocationSubmit}
                />
            </div>
        );
    }
}

export default App;