import React, { Component } from 'react';
import './Dashboard.css';
import { callApi, getSession, setSession } from './Api';
import MenuBar from './MenuBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Resume from './Resume'; 
import Testimonials from './Testimonials';  // ✅ Imported Testimonials component

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      activeComponent: <Home /> // default to Home
    };
  }

  componentDidMount() {
    const csr = getSession('csrid');
    if (!csr) {
      this.logout();
      return;
    }
    const data = JSON.stringify({ csrid: csr });
    callApi('POST', 'http://localhost:8080/users/getfullname', data, this.showFullname);
  }

  showFullname = (response) => {
    this.setState({ fullname: response });
  };

  logout = () => {
    setSession('csrid', '', -1);
    window.location.replace('/');
  };

  loadComponent = (mid) => {
    const components = {
      home: <Home />,
      about: <About />,
      skills: <Skills />,
      projects: <Projects />,
      contact: <Contact />, 
      resume: <Resume />, 
      testimonials: <Testimonials />,  // ✅ Added Testimonials to routing
      '1': <div>JobPostings</div>,
      '2': <div>JobSearch</div>,
      '3': <div>MyProfile</div>,
    };
    this.setState({ activeComponent: components[mid] || <Home /> });
  };

  render() {
    const { fullname, activeComponent } = this.state;
    return (
      <div className="dashboard">
        <div className="header">
          <div className="logoText">Personal <span>Portfolio</span></div>
          <div className="userInfo">
            <label className="fullname">{fullname}</label>
            <img className="logout" src="/logout.png" alt="Logout" onClick={this.logout} />
          </div>
        </div>

        <div className="dashboardBody">
          <div className="menu">
            <MenuBar onMenuClick={this.loadComponent} />
          </div>
          <div className="outlet">
            {activeComponent}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
