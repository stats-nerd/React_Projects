import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
       <Section
         title="Model S"
         backgroundImg="images/images/model-s.jpg"
       />
       <Section
         title="Model Y"
         backgroundImg="images/images/model-y.jpg"
       />
       <Section
         title="Model 3"
         backgroundImg="images/images/model-3.jpg"
       />
       <Section
         title="Model X"
         backgroundImg="images/images/model-x.jpg"
       />
       
    </Container>
    
  )
}

export default Home

const Container = styled.div`
height: 100vh;
    
`