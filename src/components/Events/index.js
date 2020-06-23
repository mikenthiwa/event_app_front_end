import React from 'react';
import Card from '../Cards';
import { useQuery } from '@apollo/react-hooks';
import { EventsQuery } from "../../queries";
import Loader from '../Loader';
import { LoadingContainer, ErrorContainer, EmptyContainer} from "./styles";

const Events = () => {
    const { loading, error, data } = useQuery(EventsQuery);
    if (loading) return <LoadingContainer><Loader /></LoadingContainer>
    if(error) return <ErrorContainer>Something went wrong please reload</ErrorContainer>
    if(data.events.length === 0) return <EmptyContainer>No events scheduled</EmptyContainer>
    const renderEvents = () => {
        const { events } = data;
        return events.map((event, index) => {
            return (
                <Card key={index} data={event} />
            )
        })
    }

    return (
        renderEvents()
    )
};

export default Events;