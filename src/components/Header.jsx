import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
       
        <img src="images/images/logo.svg" alt=""/>
       
     <Menu>
        <p>Shop</p>
        <p>Contact</p>
        <p>Models</p>
         
     </Menu>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
padding: 0 20px;
top: 0;
left: 0;
right: 0;



`

const Menu = styled.div`
display: flex;
font-weight: 750;
align-items: center;
justify-content: right;
flex: 1;

p{
    margin: 0 1rem;
    cursor: pointer;
}

`