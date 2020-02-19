export default (state = null, action) => {
    switch(action.type){
        case 'UPDATE_TRIP_LOCATION':
            return action.payload;
        default:
            return state;
    }
}