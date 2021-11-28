import styled from "styled-components";

const Button = styled.button `
    background-color: transparent;
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 3px 1px rgba(0,0,0,0.125);
    color: #888888;
    padding: 0.5rem 2rem;
    font-weight: 600;
`;

const ProviderButton = styled.button`
    background-color: ${props=> props.bgcolor || "transparent"};
    display: flex;
    justify-conent: center;
    align-items: center;
    gap: 0.5rem;
`

export { Button, ProviderButton }