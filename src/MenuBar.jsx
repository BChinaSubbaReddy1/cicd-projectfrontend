import React, { Component } from 'react';
import './MenuBar.css';
import { BASEURL, callApi, getSession } from "./Api";

export default class MenuBar extends Component {
  constructor() {
    super();
    this.state = { menuItems: [] };
    this.loadMenus = this.loadMenus.bind(this);
  }

  componentDidMount() {
    let csr = getSession("csrid");
    let data = JSON.stringify({ csrid: csr });
    callApi("POST", BASEURL + "menus/getmenusbyrole", data, this.loadMenus);
  }

  loadMenus(response) {
    let data = JSON.parse(response);
    const staticMenuItems = [
      { mid: "home", menu: "Home" },
      { mid: "about", menu: "About" },
      { mid: "skills", menu: "Skills" },
      { mid: "projects", menu: "Projects" },
      { mid: "contact", menu: "Contact" },
      { mid: "resume", menu: "Resume" },
      { mid: "testimonials", menu: "Testimonials" },
    ];

    const combinedMenuItems = [...staticMenuItems, ...data];
    this.setState({ menuItems: combinedMenuItems });
  }

  render() {
    const { menuItems } = this.state;
    return (
      <div className='menubar'>
        <div className='menuheader'>MENU</div>
        <div className='menulist'>
          <ul>
            {menuItems.map((row) => (
              <li key={row.mid} onClick={() => this.props.onMenuClick(row.mid)}>
                {row.menu}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
