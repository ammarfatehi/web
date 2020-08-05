import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import './App.css';


import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import CourseworkPage from './Pages/CourseworkPage';
import ResumePage from './Pages/ResumePage';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Ammar Fatehi',
      headerLinks: [
        {title: 'Home', path: '/web'},
        {title: 'About', path: '/web/about'},
        {title: 'Coursework', path: '/web/coursework'},
        {title: 'Resume', path: '/web/resume'}
      ],
      home: {
        title: 'Welcome',
        subTitle: 'Have a look around.',
        text: 'Checkout my projects below!'  
      },
      about: {
        title: 'About Me', 
      },
      coursework: {
        title: 'Coursework'
      },
      resume: {
        title: 'My Resume'
      }
    }
  }

  render(){
    return (
      <Router>
        <Container className = "p-0" fuild = {true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Ammar Fatehi</Navbar.Brand>

            <Navbar.Toggle className = "border-0" aria-controls = "navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className = 'ml-auto'>
               <Link className = "nav-link" to = "/web">Home</Link>
               <Link className = "nav-link" to = "/web/about">About</Link>
               <Link className = "nav-link" to = "/web/coursework">Coursework</Link>
               <Link className = "nav-link" to = "/web/resume">Resume</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route path = "/web" exact render = {() => <HomePage title = {this.state.home.title} subTitle = {this.state.home.subTitle} text = {this.state.home.text}/>} />
          <Route path = "/web/about" render = {() => <ProjectPage title = {this.state.about.title} />} />
          <Route path = "/web/coursework" render = {() => <CourseworkPage title = {this.state.coursework.title} />} />
          <Route path = "/web/resume" render = {() => <ResumePage title = {this.state.resume.title} />} />

          <Footer />

        </Container>
      </Router>
      );
  }
}

export default App;
