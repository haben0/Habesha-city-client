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