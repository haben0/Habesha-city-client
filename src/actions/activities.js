import * as api from '../api';

// Action Creator
export const getActivities = () => async (dispatch) => {
    try {
        const {data } = await api.fetchActivities();

         dispatch( {type: 'FETCH_ALL', payload: data } );
    } catch (error) {
        console.log(error.message);
    }   
}

export const getUpcomingActivities = () => async (dispatch) => {
    try {
        const {data } = await api.fetchUpcomingActivities();
        console.log('getting upcoming data');
         dispatch( {type: 'FETCH_UPCOMING', payload: data } );
    } catch (error) {
        console.log(error.message);
    }   
}

export const getPreviousActivities = () => async (dispatch) => {
    try {
        const {data } = await api.fetchPreviousActivities();
        console.log('getting previous data');
         dispatch( {type: 'FETCH_PREVIOUS', payload: data } );
    } catch (error) {
        console.log(error.message);
    }   
}

export const createActivity = (activity) => async (dispatch) => {
    try {
        console.log({
            title : activity.title,
            eventDate : `${activity.activityDate} ${activity.activityTime}`,
            location: activity.location,
            description: activity.description,  
            selectedFile: activity.selectedFile, 
            tags: activity.tags
          })

        const { data } = await api.createActivity({
            title : activity.title,
            eventDate : `${activity.activityDate} ${activity.activityTime}`,
            location: activity.location,
            description: activity.description,  
            selectedFile: activity.selectedFile, 
            tags: activity.tags
          });

        dispatch({type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
