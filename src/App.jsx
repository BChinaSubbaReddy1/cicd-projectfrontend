import React, { Component } from 'react';
import './App.css';
import { BASEURL, callApi, setSession } from './Api';
import { useNavigate } from 'react-router-dom';

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      role: '',
      fullname: '',
      signUpPassword: '',
      confirmPassword: '',
      errorMessage: '',
      isSignUp: false,
      submittedData: null,
    };
  }

  handleInputChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  forgotPassword = () => {
    const { username } = this.state;
    if (!username) {
      this.setState({ errorMessage: 'Please enter your username' });
      return;
    }
    const url = `http://localhost:8080/users/forgotpassword/${username}`;
    callApi('GET', url, '', this.forgotPasswordResponse);
  };

  forgotPasswordResponse = (res) => {
    const data = res.split('::');
    if (data[0] === '200') {
      this.setState({ errorMessage: '' });
      alert(data[1]);
    } else {
      this.setState({ errorMessage: data[1] });
    }
  };

  signIn = () => {
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ errorMessage: 'Please fill in both fields' });
      return;
    }

    const data = JSON.stringify({
      email: username,
      password: password,
    });

    callApi('POST', `${BASEURL}users/signin`, data, this.signInResponse);
  };

  signInResponse = (res) => {
    const rdata = res.split('::');
    if (rdata[0] === '200') {
      setSession('csrid', rdata[1], 1);
      this.setState({
        errorMessage: '',
        submittedData: {
          username: this.state.username,
          password: this.state.password
        }
      }, () => {
        this.props.navigate('/dashboard');
      });
    } else {
      this.setState({ errorMessage: rdata[1] });
    }
  };

  userRegistration = () => {
    const { fullname, email, role, signUpPassword, confirmPassword } = this.state;
    if (!fullname || !email || !role || !signUpPassword || !confirmPassword) {
      this.setState({ errorMessage: 'Please fill all fields' });
      return;
    }

    if (signUpPassword !== confirmPassword) {
      this.setState({ errorMessage: 'Passwords do not match' });
      return;
    }

    const data = JSON.stringify({
      fullname: fullname,
      email: email,
      role: role,
      password: signUpPassword,
    });

    callApi('POST', 'http://localhost:8080/users/signup', data, this.getResponse);
  };

  getResponse = (res) => {
    const resp = res.split('::');
    alert(resp[1]);
    if (resp[0] === '200') {
      this.setState({
        errorMessage: '',
        isSignUp: false,
        submittedData: {
          fullname: this.state.fullname,
          email: this.state.email,
          role: this.state.role
        }
      });
    }
  };

  toggleSignUp = () => {
    this.setState((prevState) => ({
      isSignUp: !prevState.isSignUp,
      errorMessage: '',
      submittedData: null,
    }));
  };

  render() {
    const {
      isSignUp,
      username,
      password,
      fullname,
      email,
      role,
      signUpPassword,
      confirmPassword,
      errorMessage,
      submittedData
    } = this.state;

    return (
      <div className="container">
        <div className="header-content">
          <h1>Portfolio</h1>
          <h2>Your portfolio is a reflection of<br />your journey, a story you share with the world.</h2>
        </div>

        <div className="login-box">
          <div className="popup-header">{isSignUp ? 'Create New Account' : 'Login'}</div>

          {!isSignUp ? (
            <>
              <label>Username*</label>
              <input type="text" id="username" value={username} onChange={this.handleInputChange} />
              <label>Password*</label>
              <input type="password" id="password" value={password} onChange={this.handleInputChange} />
              <div className="forgotpassword">
                Forgot <span onClick={this.forgotPassword}>Password?</span>
              </div>
              <button className="login-btn" onClick={this.signIn}>Sign In</button>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <div className="toggle-signup">
                Don't have an account? <span onClick={this.toggleSignUp}>Sign Up Now</span>
              </div>
            </>
          ) : (
            <>
              <label>Full Name</label>
              <input type="text" id="fullname" value={fullname} onChange={this.handleInputChange} />
              <label>Email</label>
              <input type="email" id="email" value={email} onChange={this.handleInputChange} />
              <label>Role</label>
              <select id="role" value={role} onChange={this.handleInputChange}>
                <option value="">Select Role</option>
                <option value="1">Admin</option>
                <option value="2">Employee</option>
                <option value="3">Job Seeker</option>
              </select>
              <label>Password*</label>
              <input type="password" id="signUpPassword" value={signUpPassword} onChange={this.handleInputChange} />
              <label>Confirm Password*</label>
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={this.handleInputChange} />
              <button className="login-btn" onClick={this.userRegistration}>Register</button>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <div className="toggle-signup">
                Already have an account? <span onClick={this.toggleSignUp}>Sign In</span>
              </div>
            </>
          )}

          {submittedData && (
            <div className="user-details">
              <h3>Entered Details:</h3>
              <ul>
                {Object.entries(submittedData).map(([key, value]) => (
                  <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div id="footer">
          <div className="copyrighttext">© 2025 Portfolio. All rights reserved.</div>
          <div className="socialmedia">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img className="icon" src="/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img className="icon" src="/x.png" alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <img className="icon" src="/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// Wrapper to inject navigate into class component
function AppWrapper() {
  const navigate = useNavigate();
  return <LoginComponent navigate={navigate} />;
}

export default AppWrapper;
