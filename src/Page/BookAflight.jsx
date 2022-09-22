import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
function BookAflight() {



  return (
    <Container>
      <Wrapp>
       <Card>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/flat-design-travel-background_23-2149193475.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      </Wrapp>
   
    </Container>
  )
}


const Container = styled.div`
    width: 900px ;
    height:800px ;

    display: flexbox;
    justify-content: center;
    margin:0 auto ;
`
const Wrapp = styled.div`
  padding-top:10px ;
`
export default BookAflight