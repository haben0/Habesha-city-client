export const activities =  (activities = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [ ...activities, action.payload];
        default:
            return activities;
    }
}

export const upcomingActivities =  (activities = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_UPCOMING':
            return action.payload;
        default:
            return activities;
    }
}

export const previousActivities =  (activities = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_PREVIOUS':
            return action.payload;
        default:
            return activities;
    }
}