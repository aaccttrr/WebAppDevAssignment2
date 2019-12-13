import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import {Navbar, Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {

    }
  }
  

  refresh = () => {
		this.setState({});
	}

  render(){
    return (
      <div className="App">
        <h1 class="">Library App</h1>
         {/* <BrowserRouter>  
          <Navbar bg="light" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar> */}
          <div class="m-5">
            <AddBook refresh={this.refresh}/>
          </div>
          <BookList refresh={this.refresh}/>
        {/* </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
