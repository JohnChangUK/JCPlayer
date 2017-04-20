import constants from '../constants';

var initialState = {
    all: null
};

export default (state = initialState, action) => {
// Inside the function, start with an updated state
    let updated = Object.assign({}, state);

    switch(action.type) {
        case constants.PODCAST_RECEIVED:
        console.log('PODCAST_RECEIVED: ' + JSON.stringify(action.podcasts));
        updated['all'] = action.podcasts;

        return updated;

        default:
            return state;
    }
};