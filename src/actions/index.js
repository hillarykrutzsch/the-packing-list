import weatherAPI from '../api/weather';


const API_KEY = 'b98eda624dda452f9459a883922ee87e';



export const getWeatherAtLocation = () => {
    return async (dispatch, getState) => {
        let tripLocation = getState().tripLocation;
        const response = await weatherAPI.get(`forecast/daily?key=${API_KEY}&units=I&country=US&postal_code=${tripLocation}`);   
        dispatch({type: 'GET_WEATHER', payload: response.data.data });
    };
};

export const setAppViewToPackingList = () => {
    return {
        type: 'SHOW_PACKING_LIST',
        payload: 'packing_list'
    }
}

export const updateTripLocation = (location) => {
    return {
        type: 'UPDATE_TRIP_LOCATION',
        payload: location
    }
}