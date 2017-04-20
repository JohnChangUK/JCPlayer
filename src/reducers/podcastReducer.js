import constants from '../constants';

var initialState = {
    all: null,
    selected: null
};

export default (state = initialState, action) => {
// Inside the function, start with an updated state
    let updated = Object.assign({}, state);

    switch(action.type) {
        case constants.PODCAST_RECEIVED:
        // console.log('PODCAST_RECEIVED: ' + JSON.stringify(action.podcasts));
        updated['all'] = action.podcasts;

        return updated;

        case constants.PODCAST_SELECTED:
        // console.log('PODCAST_SELECTED: ' + JSON.stringify(action.podcast));
        if (updated.selected != null) {
            if (updated.selected.collectionId == action.podcast.collectionId)
                return state;
        }

        updated['selected'] = action.podcast;
        return updated;

        default:
            return state;
    }
};