import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories(){
    if(this.state.activeTab=== 0){
      return(
        <div className="projects-grid">
          {/* React Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/images/react-bg.png) center / cover'}}>
              Bishal Thapaliya
            </CardTitle>
            <CardText className="justify-content">
              Bishal Thapaliya is my own portfolio project where people can get more information about me. This project hase been done using ReactJS, React-MDL.
            </CardText>

            <CardActions border>
              <Button raised accent><a className="project-links" href="https://github.com/VishalThapaliya/my_portfolio" target="_blank">GitHub</a></Button>
            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          { /* React Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/images/react-bg2.png) center / cover'}}>
              Stylbum Login
            </CardTitle>
            <CardText className="justify-content">
              Stylebum Login is a simple login page containg necessary login credential fields which is developed using ReactJS, ReactModal, etc.
            </CardText>

            <CardActions border>
              <Button raised accent><a className="project-links" href="https://github.com/VishalThapaliya/React-Login" target="_blank">GitHub</a></Button>
            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* React Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/images/react-bg3.png) center / cover'}}>
              PhotoList Filter Project
            </CardTitle>
            <CardText className="justify-content">
              PhotoList is a simple react filter project where user can search for specific photo from the list and it is developed using ReactJS, React-Router, etc.
            </CardText>

            <CardActions border>
              <Button raised accent><a className="project-links" href="https://github.com/VishalThapaliya/PhotoList-Web-App-with-React-JS" target="_blank">GitHub</a></Button>

            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1){
      return(
        <div className="projects-grid">
          {/* HTML/CSS Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/images/html-bg2.png) center / cover'}}>
              Restaurant The Himalayan
            </CardTitle>
            <CardText className="justify-content">
              Restaurant The Himalayan is a website development project for a Nepalese restaurant located in Paris. This project has been done using HTML5, CSS3, JavaScript, jQuery, and Bootstrap.
            </CardText>

            <CardActions border>
              <Button raised accent><a className="project-links" href="https://github.com/VishalThapaliya/Restaurant-Himalayan" target="_blank">GitHub</a></Button>

            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          { /* HTML/CSS Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/images/html-bg1.png) center / cover'}}>
              Darshan Tech
            </CardTitle>
            <CardText className="justify-content">
              Darshan Tech is a pure responsive web development project which has been done using HTML5 and CSS3 only. This is a mobile-first approach application.
            </CardText>

            <CardActions border>
              <Button raised accent> <a className="project-links" href="https://github.com/VishalThapaliya/Responsive-website-with-HTML5-and-CSS3-only" target="_blank">GitHub </a></Button>

            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* HTML/CSS Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/images/html-bg3.png) center / cover'}}>
              Darshan Technology
            </CardTitle>
            <CardText className="justify-content">
              Darshan Technology is a responsive landing page application. This project has been done using HTML5, CSS3, Bootstrap, and Javasript (for animation).
            </CardText>

            <CardActions border>
              <Button raised accent><a className="project-links" href="https://github.com/VishalThapaliya/Darshan-Technology" target="_blank">GitHub</a></Button>

            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }else if(this.state.activeTab ===2){
      return(
        <div className="projects-grid">
          {/* C# Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/images/cSharp1.png) center / cover'}}>
              ESIGELEC Canteen
            </CardTitle>
            <CardText className="justify-content">
              ESIGELEC Canteen is my school project where user can have a look for the foods available in the canteen whereas admin can add, modify and/or remove food items.
              This project has been done with ASP.Net, C#, and MS-SQL Server.
            </CardText>

            <CardActions border>
              <Button raised accent><a className="project-links" href="https://github.com/VishalThapaliya/Our-Canteen" target="_blank">GitHub</a></Button>

            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          { /* C# Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#ccc', height: '176px', background: 'url(/images/cSharp2.png) center / cover'}}>
              Civil International Education
            </CardTitle>
            <CardText className="justify-content">
              Civil International Education (CIE) is a responsive web application development project for an educational consultancy firm located in Kathmandu, Nepal.
              This porject has been done with ASP.Net, C#, CSS3, Bootstrap, Javasript, jQuery, MSSQL Server.
            </CardText>

            <CardActions border>
              <Button raised accent> <a className="project-links" href="#" target="_blank">GitHub </a></Button>

            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* C# Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#5B5941', height: '176px', background: 'url(/images/cSharp3.png) center / cover'}}>
              ESIGELEC Library
            </CardTitle>
            <CardText className="justify-content">
              ESIGELEC Library is my school project for library management system which is developed to help librarians to manage and control the transaction of books in a library.
              This application has been developed in WPF, WCF, C#, and MSSQL Server.
            </CardText>

            <CardActions border>
              <Button raised accent><a className="project-links" href="https://github.com/VishalThapaliya/ESIGELEC-Library" target="_blank">GitHub</a></Button>

            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }else if(this.state.activeTab === 3){
      return(
        <div className="projects-grid">
          {/* PHP Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#5B5941', height: '176px', background: 'url(/images/php-bg1.png) center / cover'}}>
              ECommerce
            </CardTitle>
            <CardText className="justify-content">
              ECommerce is my personal e-commerce web developement project to learn PHP.
              This project has been done with PHP, MySQL, HTML5, CSS3, and Javasript.
            </CardText>

            <CardActions border>
              <Button raised accent><a className="project-links" href="https://github.com/VishalThapaliya/ECommerce" target="_blank">GitHub</a></Button>

            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          { /* PHP Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#5B5941', height: '176px', background: 'url(/images/php-bg2.png) center / cover'}}>
              Chat System
            </CardTitle>
            <CardText className="justify-content">
            Chat System is an individual project to chatting functionalities in PHP.
              This porject has been done with PHP, CSS, and MySQL.
            </CardText>

            <CardActions border>
              <Button raised accent> <a className="project-links" href="https://github.com/VishalThapaliya/Chat-System" target="_blank">GitHub </a></Button>

            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* PHP Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#5B5941', height: '176px', background: 'url(/images/php-bg3.png) center / cover'}}>
              Frankline Fine Dining
            </CardTitle>
            <CardText className="justify-content">
              Frankline Fine Dining is a simple web development project for a restaurant where user can have a look for the cuisines available in the restaurant.
              This project was developed using PHP, CSS3, HTML5, and MySQL.
            </CardText>

            <CardActions border>
              <Button raised accent><a className="project-links" href="https://github.com/VishalThapaliya/FranklineFineDining" target="_blank">GitHub</a></Button>

            </CardActions>

            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }

  }


  render(){
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple >
          <Tab>React</Tab>
          <Tab>HTML/CSS/JS</Tab>
          <Tab>ASP.Net/C#</Tab>
          <Tab>PHP</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;
