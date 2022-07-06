import React from "react";
import { Card, Button } from "react-bootstrap";
const GroupCard = ({ title, members }) => {
  return (
    <div>
      <Card>
        <Card.Header as="h5">{title}</Card.Header>
        <Card.Body>
          <Card.Text>
            {members.map((ele) => {
              return (
                <ul>
                  <li>{ele}</li>
                </ul>
              );
            })}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GroupCard;
