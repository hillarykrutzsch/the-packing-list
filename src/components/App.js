import React from 'react';
import TripBuilder from './TripBuilder';
import WeatherDisplay from './WeatherDisplay';
import moment from 'moment';
import PackingListDisplay from './PackingListDisplay';
import './styles/App.scss';
import { connect } from 'react-redux';


class App extends React.Component{
    constructor(props){
        super(props);
        this.idCounter = 0;
        this.state = {
            familyMembers: [],
            tripStartDate: null,
            tripEndDate: null,
            numDays:0,
            tripLocation: null,
            weatherData: []
        }
    }
    
    /*async getWeatherAtLocation(){
        if(this.state.tripLocation != null){
            //need to call API here but moved this to actions
            this.setState({weatherData:response.data.data})
            this.calculatePackingList();
        }

    }*/

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

    updateLocationState = (tripLocation) => {
        this.setState({tripLocation})
    }

    render(){
        return (
            <div style={{marginTop:'40px'}}>
                {this.props.appView === 'trip_builder' ? (
                    <TripBuilder 
                        familyList={this.state.familyMembers}
                        tripStartDate={this.state.tripStartDate}
                        tripEndDate={this.state.tripEndDate}
                        addMember={this.addMember} 
                        removeMember={this.removeMember}  
                        updateDiaperSituation={this.updateDiaperSituation}
                        onDatesChange={this.onDatesChange}
                        updateLocationState={this.updateLocationState}
                    />
                ) : 
                (
                    <PackingListDisplay 
                        weatherData={this.state.weatherData} 
                        familyList={this.state.familyMembers}
                        numDays={this.state.numDays}
                    />
                )}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { appView: state.appView }
}


export default connect(mapStateToProps)(App);