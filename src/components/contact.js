import React, { Component } from 'react';
import { Grid, Cell, ListItem, List, ListItemContent } from 'react-mdl';
import avatar from '../Image-2.png';
import avatar2 from '../Image-3.png';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Aditya Gupta</h2>
            <img
              src = {avatar2}
              className = "contact-avatar"
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              Feel free to contact me anytime regarding any questions you may have about me or anything that I have worked on
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <a href="mailto:agupta39@ucsc.edu">
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      email
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <a href="https://www.linkedin.com/in/aditya-gupta345/" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true"/>
                      linkedin
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <a href="https://www.instagram.com/aditzkabitz/?hl=en" target="_blank">
                      <i className="fa fa-instagram" aria-hidden="true"/>
                      instagram
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <a href="https://www.facebook.com/theguppster" target="_blank">
                      <i className="fa fa-facebook-square" aria-hidden="true"/>
                      facebook
                    </a>
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

export default Contact;
