import React from 'react'
import styled from "styled-components"

function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
           <h1>{title}</h1> 
           <p>{description}</p>
           </ItemText>
           <ButtonGroup>
               <LeftButton>
                    {leftBtnText}
               </LeftButton>
            { rightBtnText && 
                <RightButton>
                    {rightBtnText}
               </RightButton>
            }
           </ButtonGroup>
           <DownArrow src="/images/down-arrow.svg" />

          
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between; //vertically
    align-items:center;
    background-image: ${props => `url('/images/${props.bgImage}')`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    flex:1;

`

const ButtonGroup = styled.div`
display:flex;
margin-bottom: 30px;
// flex-direction:column;
align-items:center;
@media (max-width: 768px) {
    flex-direction: column;
    
}


`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    color:white;
    height:40px;
    width:256px;
    align-items:center;
    text-transform:uppercase;
    display:flex;
    justify-content:center;
    border-radius:100px;
    font-size:12px;
    opacity:0.85;
    cursor:pointer;
    margin-top:10px;
    margin-right:20px;
    

`
const RightButton = styled(LeftButton)`
    
    background-color:white;
    color:black;
    opacity:0.65;
    
`
const DownArrow = styled.img`
    height:40px;
    animation: animateDown infinite 1.5s;
    margin-bottom:10px;

`