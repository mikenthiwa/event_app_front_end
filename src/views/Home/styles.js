import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    margin-bottom: 50px
`

export const Body = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const MainEvent = styled.div`
    width: 100%
    display: flex;
    flex-direction: column;
    margin-bottom 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 6px 0px, rgba(0, 0, 0, 0.1) 0px 2px 12px 0px !important;
    border-radius: 5px;
    margin-top: 20px;
`;


export const EventDetailContainer = styled.div`
    background-color: #28223F;
    height: 100px;
    border-radius: 5px;
    color: white;
    display: flex;
`;

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: auto;
    text-align: center;
    font-size: 20px;
    font-weight: 100 !important;
    letter-spacing: 1px
`;

export const Events = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
    justify-content: center;
    
`;