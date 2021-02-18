import styled from "styled-components";

export const LoadingContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50px, 10px);
`;

export const ErrorContainer = styled.div`
    border: 1px solid red;
    padding: 5px 10px;
    position: absolute;
    left: 50%;
    transform: translate(-100px, 10px);
`

export const EmptyContainer = styled.div`
    border: 1px solid blue;
    padding: 5px 10px;
    position: absolute;
    left: 50%;
    transform: translate(-100px, 10px);
    border-radius: 5px;
`;
