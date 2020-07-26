import React ,{Component} from 'react';
import { Router, Route, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class MenuBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="pl-2 ">
        <Navbar className="MenuBar" bg="light" expand="lg">
          <Navbar.Brand className="pr-5" href="/">Home</Navbar.Brand>
          <Navbar.Brand href="about">About</Navbar.Brand>
        </Navbar>
      </div>
      
          // <Navbar.Toggle aria-controls="basic-navbar-nav" />
          // <Navbar.Collapse id="basic-navbar-nav">
          //   <Nav className="mr-auto">
          //     <Nav.Link href="#home">Home</Nav.Link>
          //     <Nav.Link href="#link">Link</Nav.Link>
          //     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          //       <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          //       <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          //       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          //       <NavDropdown.Divider />
          //       <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          //     </NavDropdown>
          //   </Nav>
          //   <Form inline>
          //     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          //     <Button variant="outline-success">Search</Button>
          //   </Form>
          // </Navbar.Collapse>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default MenuBar;
