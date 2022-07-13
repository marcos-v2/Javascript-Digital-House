import React from 'react';

/* import TopBar from './TopBar'; */
import ContentRowMovies from './ContentRowMovies';
import SideBar from './SideBar';
import "../assets/css/app.css"

function ContentWrapper(){
    return(
        <div id="wrapper">
            <SideBar/>
            <ContentRowMovies/>
        </div>
    )
}

export default ContentWrapper