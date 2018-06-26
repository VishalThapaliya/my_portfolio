import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component{
  render(){
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <p> {this.props.startYear} - {this.props.endYear} </p>
          </Cell>
          <Cell col={8}>
            <h5 style={{marginTop:'0px'}}> {this.props.degreeObtained} </h5>
            <h6> {this.props.schoolName}</h6>
            <p>{this.props.schoolAddress}</p>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Education;
