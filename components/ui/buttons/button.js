import styled from 'styled-components'

const ButtonBase = styled.button`
    box-shadow: 0 0 3px 1px rgba(0,0,0,0.125);
    background-color: ${props => props.bgcolor || "transparent"};
    border:none;
    border-radius:4px;
    margin: 2rem 1rem;
    color: ${props => props.textcolor || "#444"};
    font-weight: bold;
    display: block;
`

function Button({children, bgcolor, textcolor, ...props}) {
// learning Timestamp: 1:03.24
    return (
       <ButtonBase bgcolor = {bgcolor} textcolor = {textcolor}>
           {children}
       </ButtonBase>
    )
}

export default Button