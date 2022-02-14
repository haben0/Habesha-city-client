import React from "react";
import Banner from "./components/Banner/Banner.js";
import Header from "./components/Header/Header.js"
import SubHeader from "./components/Header/SubHeader.js"
import Services from "./components/Services/Services.js";


const App = () => {
    return (
        <div>
            <SubHeader/>
            <Header/>
            <Banner/>
            <Services/>
            {/* <h1>Habesha City</h1> */}
        </div>
    );
}

export default App;