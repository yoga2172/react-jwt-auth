import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,  CardDeck , Button} from 'react-bootstrap';




class Slidecard extends Component {
  render(){
  return (
    <CardDeck>
  <Card >
    <Card.Img variant="top" src="https://www.printstop.co.in/images/product/Thumbnail96_11514729202004.jpg" />
    <Card.Body>
      <Card.Title>Apperal's</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Button>
      View More
    </Button>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.printstop.co.in/images/product/Black-Metal-Bottle_Thumbnail.jpg" />
    <Card.Body>
      <Card.Title>DrinkWare</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Button>
    View More
    </Button>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.printstop.co.in/images/product/Kraft-Diary_Thumbnail.jpg" />
    <Card.Body>
      <Card.Title>Stationery</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Button>
    View More
    </Button>
  </Card>
</CardDeck>
  );
}
}
export default Slidecard;