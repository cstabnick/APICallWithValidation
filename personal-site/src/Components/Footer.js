import React ,{Component} from 'react';
import { Router, Route, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="pl-2 ">
        <Navbar className="MenuBar" bg="light" expand="lg">
          <p>From, Connor</p>
        </Navbar>
      </div>
      

    );
  }
}


export default Footer;
