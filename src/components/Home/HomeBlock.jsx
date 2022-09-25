
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
        <Card.Img variant="top" src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg" height={"200px"}/>
        <Card.Body>
          <Card.Title>Great prices for over 40 cities!</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.tripit.com/web/blog/wp-content/uploads/sites/2/2015/09/9987344.jpg" height={"200px"}/>
        <Card.Body>
          <Card.Title>New destinations from Belgrade and Berlin!</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.delicious.com.au/WIXeICQZ/del/2018/12/istanbul-turkey-97382-2.jpg"  height={"200px"}/>
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

  height: 0px ;
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