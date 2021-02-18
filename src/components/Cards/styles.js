import styled from "styled-components";

export const CardContainer = styled.div`
    height: 300px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 6px 0px, rgba(0, 0, 0, 0.1) 0px 2px 12px 0px !important;
    padding: 0 10px;
    background-color: #FFFF
`;




export const EventDescription = styled.div`
    font-size: 1.25rem;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    margin-top: 20px;
    text-align: center;
    margin-bottom: 10px;
    height: 60px;
`;

export const TopicsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    
`;

export const Topic = styled.div`
    letter-spacing: 1px;
    font-size: 15px !important; 
    margin-bottom: 5px;
    display: flex;
`

export const Icon = styled.div`
    margin-right: 5px;
`;


export const EventLocation = styled.div`

`;

export const EventTime = styled.div`
    font-weight: 600;
`;

export const EventButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    
`;

export const Button = styled.button`
    
`;

