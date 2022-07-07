import React from "react";
import { Card, Button } from "react-bootstrap";
import GroupIcon from "@mui/icons-material/Group";
import "./styleHome.css";

const GroupCard = ({ title, members }) => {
  return (
    <div className="card-div">
      <div className="card-content">
        <GroupIcon className="group-icon" />
        <p className="group-title">{title}</p>
      </div>
      {/* <Card>
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
      </Card> */}
    </div>
  );
};

export default GroupCard;
