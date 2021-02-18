import { gql } from 'apollo-boost';

export const EventsQuery = gql`
 {
    events {
        eventDescription,
        onlineStatus,
        topics,
        eventDate
    } 
 }
`;