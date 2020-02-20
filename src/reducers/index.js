const initialState = {
    weatherData: [],
    appView: 'trip_builder',
    tripLocation: null,
    familyMembers: []
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
		default: {
			return {
				...state
			};
		}
	}
}