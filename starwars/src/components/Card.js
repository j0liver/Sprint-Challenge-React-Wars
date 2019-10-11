import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
const CardLayout = (props) => {

    return (
        <Card> 
            <CardBody>
                <CardTitle>Name: {props.name}</CardTitle>
                <CardSubtitle>Height: {props.height}</CardSubtitle>
                <CardSubtitle>Weight: {props.weight}</CardSubtitle>
            </CardBody>
        </Card>
    )
}
export default CardLayout

