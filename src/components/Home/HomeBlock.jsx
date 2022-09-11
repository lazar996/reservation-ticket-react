
import React from 'react'
import styled from 'styled-components'
import Airport from '../Airport/Airport'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function HomeBlock() {
  return (
    <>
    <Block>
        <Body>

       <Text> Welcome to the world of opportunity</Text>
       

        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://cdn.worldvectorlogo.com/logos/jat-yugoslav-airlines.svg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://cdn.worldvectorlogo.com/logos/jat-yugoslav-airlines.svg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://cdn.worldvectorlogo.com/logos/jat-yugoslav-airlines.svg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         
        </Card.Footer>
      </Card>
    </CardGroup>
    </Body>


    </Block>
        <BodyContent>
      
        </BodyContent>
        </>
  )
}


const BodyContent = styled.div`

  height: 600px ;
  margin:0 auto;
`

const Body = styled.div`

    
    width: 900px ;
   
    margin: 0 auto ;

`

const Block = styled.div`

    width: 100% ;
    height: 300px;
    background-color: #094981;

`

const Text = styled.div`
 width: 100%;
    height: 50px ;
    display: flexbox;
    justify-content: center;
    align-items: center;
    margin:0 auto ;
    font-family: 'Alata', sans-serif;
    color: #fff;
    font-size: 20px ;

    

`

export default HomeBlock