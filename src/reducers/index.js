import { combineReducers } from "redux";

import {activities, upcomingActivities,previousActivities}  from './activities';

export default combineReducers({
    activities, upcomingActivities, previousActivities
});