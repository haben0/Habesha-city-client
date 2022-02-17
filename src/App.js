import React from "react";
import About from "./components/About/About.js";
import UpcomingActivities from "./components/Activities/UpcomingActivities.js";
import Banner from "./components/Banner/Banner.js";
import Header from "./components/Header/Header.js"
import SubHeader from "./components/Header/SubHeader.js"
import Services from "./components/Services/Services.js";
import PrevActivities from "./components/Activities/PrevActivities.js";
import Quote from "./components/Quote/Quote.js";
import ContactUs from "./components/ContactUs/ContactUs.js";

const App = () => {
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