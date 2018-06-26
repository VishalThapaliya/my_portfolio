import React, { Component } from 'react';
import {Grid, Cell, Button } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
  render(){
    return(
      <div className="">
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div className="leftSide" >
              <img src="./images/profile.png" alt="profile-image" className="resume-img" />
            </div>
            <h2>Bishal Thapaliya</h2>
            <h4>Front-End Developer</h4>
            <Button raised colored><a className="project-links" href="./resume/CV.pdf" target="_blank">Download Resume</a></Button>
            <hr/>

            <p>
              Hello! I am Bishal Thapaliya.
              I am a Front-End Developer living in Paris, France.
              I design and code beautifully simple things, and I love what I do.
            </p>
            <hr/>

            <h5>Address</h5>
            <p>Paris, France</p>

            <h5>Phone</h5>
            <p>(+33) 7 68 31 94 27</p>

            <h5>Email</h5>
            <p>vishal.thapaliya@gmail.com</p>

            <h5>Website</h5>
            <p>www.bishalthapaliya.com</p>
            <hr/>
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h4>Experience</h4>
              <Experience
                startMonth="January"
                startYear={2018}
                endMonth="April"
                endYear={2018}
                positionTitle="Web Developer"
                companyName="Optilian"
                companyAddress="Paris, France"
              />

              <Experience
                startMonth="December"
                startYear={2016}
                endMonth="May"
                endYear={2017}
                positionTitle="Software License Management (Internship)"
                companyName="Amadeus Data Processing GmbH (Amadeus IT Group)"
                companyAddress="Erding, Germany"
              />

              <Experience
                startMonth="January"
                startYear={2013}
                endMonth="August"
                endYear={2015}
                positionTitle="Junior Front-End Developer"
                companyName="Darshan Tech Pvt. Ltd."
                companyAddress="Kathmandu, Nepal"
              />

              <Experience
                startMonth="October"
                startYear={2008}
                endMonth="May"
                endYear={2011}
                positionTitle="Database Admin Assistant"
                companyName="CEMECA Human Resource Academy (P.) Ltd."
                companyAddress="Kathmandu, Nepal"
              />
            <hr/>

            <h4>Education</h4>
            <Education
              startYear={2015}
              endYear={2017}
              schoolName="ESIGELEC"
              schoolAddress="Rouen, France"
              degreeObtained="Master of Science & Technology - Information Systems (MST-IS)"
            />

            <Education
              startYear={2011}
              endYear={2013}
              schoolName="Sikkim Manipal University"
              schoolAddress="Sikkim, India"
              degreeObtained="Master of Science in Computer Science (M.Sc. CS)"
            />

            <Education
              startYear={2006}
              endYear={2009}
              schoolName="Tribhuvan University"
              schoolAddress="Kathmandu, Nepal"
              degreeObtained="Bachelor in Business Studies (BBS)"
            />

            <hr/>


            <h4>Skills</h4>
            <Skills skill="HTML" progress={85} />
            <Skills skill="CSS" progress={80} />
            <Skills skill="ReactJS" progress={45} />
            <Skills skill="JavaScript" progress={60} />
            <Skills skill="jQuery" progress={60} />
            <Skills skill="Bootstrap" progress={75} />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
