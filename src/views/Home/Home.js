import React from 'react';
import NavBar from "../../components/Navbar";
import Event from "../../components/Events";
import EventImageSVG from '../../assests/images/event.svg'
import {
    AppContainer, Header, Body, MainEvent, EventDetailContainer, DetailContainer, Events }
    from "./styles";

const Home = () => {
  return (
    <AppContainer>
        <Header>
            <NavBar />
        </Header>
        <Body>
            <MainEvent>

                <EventDetailContainer>
                    <DetailContainer> Join Events that will be held this week</DetailContainer>
                </EventDetailContainer>
            </MainEvent>

            <Events>
                <Event />
            </Events>
        </Body>
    </AppContainer>
  );
}

export default Home;
