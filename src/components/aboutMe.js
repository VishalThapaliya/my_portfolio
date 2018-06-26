import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class About extends Component{
  render(){
    return(
      <div className="about-body">
        <Grid className="about-grid">
          {/* Left side */}
          <Cell col={12}>
            <h2>THAPALIYA Bishal</h2>
            <img src="./images/about-bg1.png" alt="profile-image" className="about-image" />

            <h3>Hi, I{"'"}m Bishal. Nice to meet you. </h3>
            <p>
              Since beginning my journey as a front-end developer started few years ago, I{"'"}ve done some web development projects for agencies, and collaborated with talend people to create digital products for both business and consumer use.
              I{"'"}m quietly confident, naturally curious, and perpetually strengthen my skills.
              I tend to code things from scratch, and enjoy bringing ideas to life in the browser.
            </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
