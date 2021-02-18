import React from 'react';
import { CardContainer, EventDescription, TopicsContainer, Topic, Icon, EventTime, EventButtonContainer,
    Button, EventLocation
} from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const Card = ({data}) => {
    const { eventDescription, onlineStatus, topics, eventDate } = data;
    console.log('>>>>>>', eventDate)
    const renderTopics = () => {
        return topics.map((topic, index) => {
            return (
                <Topic key={index}>
                    <Icon><FontAwesomeIcon icon={faCheckCircle} color='#28223F' /></Icon>
                    {topic}
                </Topic>
            )
        });
    };
    return (
        <CardContainer>
            <EventDescription>{ eventDescription }</EventDescription>
            <TopicsContainer>
                {renderTopics()}
            </TopicsContainer>
            <EventTime>{eventDate}</EventTime>
            <EventLocation>{onlineStatus ? 'Online': 'Offline'}</EventLocation>
            <EventButtonContainer>
                <Button>See details</Button>
            </EventButtonContainer>
        </CardContainer>
    )
};

export default Card;