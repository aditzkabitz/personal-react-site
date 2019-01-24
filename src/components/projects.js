import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Grid>
            <Cell col={12}>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
                <CardText className="project-title" style={{color: 'black', fontSize: '20px'}}>My Personal Site</CardText>
                <CardText>
                  This website is built using React!
                </CardText>
                <CardActions border>
                  <a href="https://github.com/aditzkabitz/aditzkabitz.github.io" target="_blank">
                    <Button colored>GitHub</Button>
                  </a>
                  <a href="https://www.aditya-gupta.com/" target="_blank">
                    <Button colored>Live Demo</Button>
                  </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Grid>
            <Cell col={12}>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '176px', background: 'url(https://www.shareyourselfartists.com/static/images/logo.png) center / cover'}} ></CardTitle>
                <CardText className="project-title" style={{color: 'black', fontSize: '20px'}}>Share Yourself Artists</CardText>
                <CardText>
                  Utilized Vue.js for frontend, Node.js for backend, Google Cloud Firebase Firestore realtime database and Paypal API for payments to develop application.
                </CardText>
                <CardActions border>
                  <a href="https://github.com/ddavisscott/sya-app-dev" target="_blank">
                    <Button colored>GitHub (private)</Button>
                  </a>
                  <a href="https://www.shareyourselfartists.com/" target="_blank">
                    <Button colored>Live Demo</Button>
                  </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Grid>
            <Cell col={6}>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '176px', background: 'url(http://projectpengyou.org/wp-content/uploads/2018/07/Stanford-Logo.png) center / cover'}} ></CardTitle>
                <CardText className="project-title" style={{color: 'black', fontSize: '20px'}}>Stanford Machine Learning</CardText>
                <CardText>
                  Learned fundamental principles regarding supervised and unsupervised learning including but not limited to: linear and logistic regression, neural networks, regularized regression, support vector machines, recommender systems with anomalies, and K-means algorithms for clustering along with PCA
                </CardText>
                <CardActions border>
                  <a href="https://github.com/aditzkabitz/Stanford-Machine-Learning" target="_blank">
                    <Button colored>GitHub</Button>
                  </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={6}>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '176px', background: 'url(https://teenlife.s3.amazonaws.com/media/uploads/listings/10o6j9O2o9go.png) center / cover'}} ></CardTitle>
                <CardText className="project-title" style={{color: 'black', fontSize: '20px'}}>Machine Learning Instructor</CardText>
                <CardText>
                  Taught Artificial Intelligence and Machine Learning courses at Stanford University. My students ranged from ages 13 to 17. During the course, I taught topics ranging from linear regression, to image recognition using Python. Worked heavily with Google's TensorFlow, NumPy and OpenAI
                </CardText>
                <CardActions border>
                  <a href="https://drive.google.com/drive/folders/1IW9ikNkDhbGtyJK7GMY91avf4LUxHrx6?usp=sharing" target="_blank">
                    <Button colored>Google Drive</Button>
                  </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <Grid>
            <Cell col={12}>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '176px', background: 'url(https://images.unsplash.com/photo-1524821695732-717b25a38974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80) center / cover'}} ></CardTitle>
                <CardText className="project-title" style={{color: 'black', fontSize: '20px'}}>Truly Truthful Tech</CardText>
                <CardText>
                  A fully functional blog with user authentication, profiles which can be edited, feed style post system with like and comment abilities, NoSQL databasing, and proper utilization of RESTful routes
                </CardText>
                <CardActions border>
                  <a href="https://github.com/aditzkabitz/personal-blog" target="_blank">
                    <Button colored>GitHub</Button>
                  </a>
                  <a href="https://trulytruthfultech.herokuapp.com/blogs" target="_blank">
                    <Button colored>Live Demo</Button>
                  </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      )
    }
  }
  render() {
    return(
      <div className="tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Vue</Tab>
          <Tab>AI/ML</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        <div className="content">{this.toggleCategories()}</div>
      </div>
    )
  }
}
export default Projects;
