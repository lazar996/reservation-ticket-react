import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function InfoCompany() {
  return (
    <CardGroup>
    <Card>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/JAT_Boeing_727_at_Zurich_Airport_in_May_1985.jpg" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/6/61/JAT_McDonnell_Douglas_DC-10-30_Milinkovic.jpg" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to
          additional content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/0/06/JAT_Boeing_737-300_JetPix.jpg" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardGroup>
  )

}


export default InfoCompany