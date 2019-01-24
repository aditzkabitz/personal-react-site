import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../Image-1.png';
import pdf from '../AGresume.pdf';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src = {avatar}
              className = "avatar-img"
            />

            <div className="banner-text">
              <h1>
                Hey There! I'm Aditya
              </h1>
              <h3>
                I'm a full stack web developer
              </h3>
              <hr/>
              <p>JavaScript (React, Vue, Node, Express) | MongoDB | HTML | CSS | Java | Python</p>
              <div className="social-links">
                  <Cell col={3}>
                    <a href="https://www.linkedin.com/in/aditya-gupta345/" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                  </Cell>
                  <Cell col={3}>
                    <a href="https://github.com/aditzkabitz" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true" />
                    </a>
                  </Cell>
                  <Cell col={3}>
                    <a href="https://www.facebook.com/theguppster" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-facebook-square" aria-hidden="true" />
                    </a>
                  </Cell>
                  <Cell col={3}>
                    <a href={pdf} rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-file" />
                    </a>
                  </Cell>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
