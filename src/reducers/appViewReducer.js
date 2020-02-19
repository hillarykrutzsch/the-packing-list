export default (state = 'trip_builder', action) => {
    switch(action.type){
        case 'SHOW_PACKING_LIST':
            return action.payload;
        default:
            return state;
    }
}