import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPreviousActivities, getUpcomingActivities } from './actions/activities';
import About from "./components/About/About.js";

import Banner from "./components/Banner/Banner.js";
import Header from "./components/Header/Header.js"
import SubHeader from "./components/Header/SubHeader.js"
import Services from "./components/Services/Services.js";

import Quote from "./components/Quote/Quote.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
import UpcomingActivities from "./components/Activities/UpcomingActivities/UpcomingActivities";
import PrevActivities from "./components/Activities/PreviousActivities/PrevActivities";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUpcomingActivities());
        dispatch(getPreviousActivities());
    }, [dispatch]);

    return (
        <div>
            <SubHeader/>
            <Header/>
            <Banner/>
            <Services/>
            <UpcomingActivities/>
            <About/>
            <PrevActivities/>
            <Quote/>
            <ContactUs/>
            {/* <h1>Habesha City</h1> */}
        </div>
    );
}

export default App;