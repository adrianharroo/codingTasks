import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

function ProductCard({ img, title, description, price, handleAddToCart }) {

  // State to manage the button colours
  const [buttonColor, setButtonColor] = useState('Colour');

  const handleSelect = (eventKey) => {
    switch (eventKey) {
      case 'action-1':
        setButtonColor('Black');
        break;
      case 'action-2':
        setButtonColor('Grey');
        break;
      case 'action-3':
        setButtonColor('Brown');
        break;
      default:
        break;
    }
  };

  return (
    // Using bootstrap Cards to display products
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>£{price}</Card.Text>
        <Dropdown onSelect={handleSelect}>
          <Card.Text style={{ fontSize: '14px', color: 'grey' }}>
            Select a colour option:
          </Card.Text>
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{ color: buttonColor }}>
            {buttonColor}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="action-1">Black</Dropdown.Item>
            <Dropdown.Item eventKey="action-2">Grey</Dropdown.Item>
            <Dropdown.Item eventKey="action-3">Brown</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br />
        <Button variant="primary" onClick={() => handleAddToCart(price)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
