// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";

import {
  Site,
  Nav,
  Grid,
  List,
  Button,
  RouterContextProvider,
} from "tabler-react";

const navBarItems = [
  { value: "Manage", to: "/", LinkComponent: withRouter(NavLink) },
  {
    value: "Shop",
    // icon: "box",
    subItems: [
      {
        value: "Cards Design",
        to: "/cards",
        LinkComponent: withRouter(NavLink),
      },
      { value: "Charts", to: "/charts", LinkComponent: withRouter(NavLink) },
      {
        value: "Pricing Cards",
        to: "/pricing-cards",
        LinkComponent: withRouter(NavLink),
      },
    ],
  },
  {
    value: "Preset",
    // icon: "calendar",
    subItems: [
      { value: "Maps", to: "/maps", LinkComponent: withRouter(NavLink) },
      { value: "Icons", to: "/icons", LinkComponent: withRouter(NavLink) },
      { value: "Store", to: "/store", LinkComponent: withRouter(NavLink) },
      { value: "Blog", to: "/blog", LinkComponent: withRouter(NavLink) },
    ],
  },
  // {
  //   value: "Pages",
  //   icon: "file",
  //   subItems: [
  //     { value: "Profile", to: "/profile", LinkComponent: withRouter(NavLink) },
  //     { value: "Login", to: "/login", LinkComponent: withRouter(NavLink) },
  //     {
  //       value: "Register",
  //       to: "/register",
  //       LinkComponent: withRouter(NavLink),
  //     },
  //     {
  //       value: "Forgot password",
  //       to: "/forgot-password",
  //       LinkComponent: withRouter(NavLink),
  //     },
  //     { value: "400 error", to: "/400", LinkComponent: withRouter(NavLink) },
  //     { value: "401 error", to: "/401", LinkComponent: withRouter(NavLink) },
  //     { value: "403 error", to: "/403", LinkComponent: withRouter(NavLink) },
  //     { value: "404 error", to: "/404", LinkComponent: withRouter(NavLink) },
  //     { value: "500 error", to: "/500", LinkComponent: withRouter(NavLink) },
  //     { value: "503 error", to: "/503", LinkComponent: withRouter(NavLink) },
  //     { value: "Email", to: "/email", LinkComponent: withRouter(NavLink) },
  //     {
  //       value: "Empty page",
  //       to: "/empty-page",
  //       LinkComponent: withRouter(NavLink),
  //     },
  //     { value: "RTL", to: "/rtl", LinkComponent: withRouter(NavLink) },
  //   ],
  // },
  // {
  //   value: "Forms",
  //   to: "/form-elements",
  //   icon: "check-square",
  //   LinkComponent: withRouter(NavLink),
  // },
  // {
  //   value: "Gallery",
  //   to: "/gallery",
  //   icon: "image",
  //   LinkComponent: withRouter(NavLink),
  // },
  // {
  //   icon: "file-text",
  //   value: "Documentation",
  //   to:
  //     process.env.NODE_ENV === "production"
  //       ? "https://tabler.github.io/tabler-react/documentation"
  //       : "/documentation",
  // },
];

const accountDropdownProps = {
  avatarURL: "./assets/imgs/mine.png",
  name: "Cosmos_flowser",
  description: "General Manager",
  options: [
    { icon: "user", value: "Admin settings" },
    { icon: "twitter", value: "Check updates", badge: "2" },
    { icon: "send", value: "Send a ticket" },
    { isDivider: true },
    { icon: "log-out", value: "Sign out" },
  ],
};

class SiteWrapper extends React.Component {


  render() {

    return (
      <Site.Wrapper
        headerProps={{
          href: "/home",
          alt: "Likegrowsers",
          imageURL: "./assets/imgs/logo.png",
          accountDropdown: accountDropdownProps,
          navItems: (
            <Nav.Item type='div' className="d-none d-md-flex">
              <Button
                outline
                size="sm"
                RootComponent="div"
                color="secondary"
              >
                <i className="fa fa-heart" />
                <span style={{paddingLeft:'10px'}}>199,938</span> 
              </Button>
            </Nav.Item>
          )
        }}
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
