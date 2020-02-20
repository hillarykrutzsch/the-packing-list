import weatherAPI from '../api/weather';


const API_KEY = 'b98eda624dda452f9459a883922ee87e';
let currId = 0;

export const getWeatherAtLocation = () => {
    return async (dispatch, getState) => {
        let tripLocation = getState().tripLocation;
        const response = await weatherAPI.get(`forecast/daily?key=${API_KEY}&units=I&country=US&postal_code=${tripLocation}`);   
        dispatch({type: 'GET_WEATHER', weatherData: response.data.data });
    };
};

export const setAppViewToPackingList = () => {
    return {
        type: 'SHOW_PACKING_LIST',
        appView: 'packing_list'
    }
}

export const updateTripLocation = (location) => {
    return {
        type: 'UPDATE_TRIP_LOCATION',
        tripLocation: location
    }
}

export const addFamilyMember = (memberType) => {
    let newMember = {
        type: memberType,
        id: currId++
    };
    if(memberType==='child'){
        newMember.diapers = 'diapers';
    }
    return {
        type: 'ADD_FAMILY_MEMBER',
        newMember
    }
}

export const removeFamilyMember = (memberType) => {
    return {
        type: 'REMOVE_FAMILY_MEMBER',
        memberType
    }
}

