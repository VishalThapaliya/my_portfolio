import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component{
  render(){
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <p>
              {this.props.startMonth}, {this.props.startYear} - {this.props.endMonth}, {this.props.endYear}
            </p>
          </Cell>
          <Cell col={8}>
            <h5 style={{marginTop: '0px'}}>{this.props.positionTitle}</h5>
            <h6>{this.props.companyName}</h6>
            <p>{this.props.companyAddress}</p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Experience;
