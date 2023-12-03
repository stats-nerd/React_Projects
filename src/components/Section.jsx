import React from 'react'
import styled from 'styled-components'




function Section(props) {
  return (
    <Wrap bgImg = {props.backgroundImg}>
        <ItemText>
            <h1>{props.title}</h1>
            <p>Order Online for Touchless Delivery</p>
        </ItemText>
         
        <ButtonGroup>
            <LeftButton>
                Custom Order
            </LeftButton>

            <RightButton>
                Existing Inventory
            </RightButton>
        </ButtonGroup>
        
        

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-image: ${props => `url("${props.bgImg}")`};
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;

    

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom: 30px;
    @media (max-width: 768px) {
     flex-direction: column;   
    }


`

const LeftButton = styled.div`
    background-color: black;
    color:white;
    height:40px;
    width:250px;
    border-radius:100px;
    padding: 10px;
    margin: 10px;
    display:flex;
    justify-content: center;
    align-items:center;
    text-transform: uppercase;
    opacity: 0.8;
    cursor: pointer;
`
const RightButton = styled(LeftButton)`
background-color: white;
opacity: 0.65;
color: #333;

`
