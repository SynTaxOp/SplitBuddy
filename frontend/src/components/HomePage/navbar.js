import React from "react";
import { Navbar, Nav, Form, FormControl, Container } from "react-bootstrap";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styleHome.css";

const NavbarSec = ({ setLoggedin }) => {
  const navigate = useNavigate();

  const logout = () => {
    setLoggedin(false);
    navigate("/");
  };
  return (
    <div>
      <Navbar className="main-navbar" expand="lg">
        <Container fluid>
          <Navbar.Brand className="brand-navbar" href="#">
            SplitBuddy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outlined" className="search-btn">
                Search
              </Button>
            </Form>
            <PowerSettingsNewIcon className="logout-btn" onClick={logout} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSec;
