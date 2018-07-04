import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className= "landing-grid">
          <Cell col={12}>
            <img
              src="../images/bg.png"
              alt="bg-image"
              className="bg-image"
            />

            <div className="banner-text">
              <h1>Front-End Developer</h1>
              <hr/>

              <p>HTML | CSS | Bootstrap | JavaScript | jQuery | React | SQL</p>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/bishal-thapaliya-571643109/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>

                <a href="https://github.com/VishalThapaliya" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" aria-hidden="true" />
                </a>

                <a href="https://www.xing.com/profile/Bishal_Thapaliya/cv" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-xing" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;
