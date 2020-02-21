const initialState = {
    weatherData: [],
    appView: 'trip_builder',
    tripLocation: null,
    familyMembers: [],
    tripStartDate: null,
    tripEndDate: null,
    numDays: 0
}

export default function rootReducer(state = initialState, action){
	switch(action.type){
        case 'SHOW_PACKING_LIST':
            return {
                ...state,
                appView: action.appView
            };
        case 'UPDATE_TRIP_LOCATION':
            return {
                ...state,
                tripLocation: action.tripLocation
            }
        case 'GET_WEATHER':
            return {
                ...state,
                weatherData: action.weatherData
            }    
        case 'ADD_FAMILY_MEMBER':
            return {
                ...state,
                familyMembers: [...state.familyMembers, action.newMember]
            }   
        case 'REMOVE_FAMILY_MEMBER':
            let foundMember = state.familyMembers.find(member => member.type === action.memberType);
            if(foundMember){
                let familyMembers = state.familyMembers.filter(member => {
                    return member.id !== foundMember.id;
                });
                return {
                    ...state,
                    familyMembers
                } 
            }   
            return state;
        case 'UPDATE_DIAPER_SITUATION':
            const familyMembers = state.familyMembers.map(member => member.id === action.data.memberID ? {...member, diapers:action.data.value} : member);
            return {
                ...state,
                familyMembers
            } 
        case 'CHANGE_TRIP_DATES':
            return {
                ...state,
                tripStartDate: action.data.tripStartDate,
                tripEndDate: action.data.tripEndDate,
                numDays: action.data.numDays
            }        
		default: {
			return {
				...state
			};
		}
	}
}