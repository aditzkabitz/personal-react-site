import React, { Component } from 'react';
import { Grid, Cell, ListItem, List, ListItemContent } from 'react-mdl';
import image from '../myimg.jpg';

class About extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={4}>
            <img
              src = {image}
              className = "about-avatar"
            />
          </Cell>
          <Cell col={8}>
            <h2>Things About Me</h2>
            <hr/>

            <div className="about-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <p>
                      <i class="fa fa-circle" aria-hidden="true"></i>
                      I love swimming and drumming
                    </p>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <p>
                      <i class="fa fa-circle" aria-hidden="true"></i>
                      My favorite basketball team is the Oklahoma City Thunder
                    </p>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <p>
                      <i class="fa fa-circle" aria-hidden="true"></i>
                      Currently studying Computer Science at UC Santa Cruz
                    </p>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <p>
                      <i class="fa fa-circle" aria-hidden="true"></i>
                      I love full stack web development
                    </p>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
