import axios from "axios";

const url = 'http://localhost:5000/activities';

export const fetchActivities = () => axios.get(url);
export const fetchUpcomingActivities = () => axios.get(`${url}/upcoming`);
export const fetchPreviousActivities = () => axios.get(`${url}/previous`);
