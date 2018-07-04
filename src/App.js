import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import LandingPage from './components/landingPage';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={ <Link style={{textDecoration: 'none', color: '#fff'}} to="/">Bishal Thapaliya</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutMe">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={ <Link style={{textDecoration: 'none', color: '#0F2027'}} to="/">Bishal Thapaliya</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutMe">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <LandingPage/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
