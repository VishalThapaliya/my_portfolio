import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          {/* Left side */}
          <Cell col={6}>
            <h2>THAPALIYA Bishal</h2>
            <img src="./images/profile.png" alt="profile-image" className="profile-image" />
            <p className="profile-body">
              Hello! My name is Bishal Thapaliya, and I{"'"}m a Paris-based freelancer specialised in front-end development.
              I have a diverse set of skills, ranging from design, to HTML, CSS, JavaScript, jQuery, bootstrap, and React.JS.
              I create functional websites for small businesses.
            </p>
          </Cell>


          {/* Right Side */}
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="listItem-content">
                    <i className="fa fa-phone-square" aria-hidden="true" />
                      (+33) 7 68 31 94 27
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="listItem-content">
                    <i className="fa fa-envelope" aria-hidden="true" />
                      vishal.thapaliya@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="listItem-content">
                    <i className="fab fa-skype" aria-hidden="true" />
                      vishal.thapaliya
                  </ListItemContent>
                </ListItem>

              </List>
            </div>


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
