import React, { Component } from 'react'
import './Navigation.css'

import SvgMenu from 'material-ui/svg-icons/navigation/menu';
import SvgClose from 'material-ui/svg-icons/navigation/close';

import { Link } from 'react-router';

import logo from '../../images/logo.png';
import logoBounties from '../AppContainer/images/logo-bounties.svg';

import FlatButton from 'material-ui/FlatButton';

import ResponsiveMenu from 'react-responsive-navbar';

class Navigation extends Component {
  render() {
    return (
      <div style={{ overflow: "hidden", minHeight: "5em" }} className="navBar">
        <Link to="/" className={"color3"} style={{ overflow: "hidden", float: "left", position: "absolute", left: "1em", padding: "1em 0em 1em 0em", top: "-5px" }}>
          <img src={logo} />
        </Link>
        <span style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '50%', boxShadow: 'inset rgba(255, 255, 255, 0.6) 0 2px 2px, inset rgba(0, 0, 0, 0.3) 0 -2px 6px' }} />

        <div style={{ float: "right", display: "block", height: "0px" }}>
          <ResponsiveMenu
            menuOpenButton={<SvgMenu className={"buttonGlow"} style={{ color: "#D7C288", position: "absolute", right: "30px", top: "30px" }} />}
            menuCloseButton={<SvgClose className={"buttonGlow"} style={{ color: "#D7C288", position: "absolute", right: "30px", top: "30px" }} />}
            changeMenuOn="1050px"
            largeMenuClassName="largeNav"
            smallMenuClassName="smallNav"
            menu={
              <ul>
                <li className="mobileShow" style={{ display: "none" }}>
                  <FlatButton style={{ fontSize: "13px", fontWeight: "600", backgroundColor: "rgba(0,0,0,0)", border: "0px solid white", color: "#D7C288", width: "120px", float: "right", height: "30px", lineHeight: "30px", position: "absolute", top: "25px", right: "30px", fontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica'" }} >
                    <Link to="/" className={"buttonGlow"} style={{ textDecoration: "none", color: "#D7C288" }}>
                      HOME
                   </Link>
                  </FlatButton>
                </li>
                {this.props.userAddress.length > 0 &&
                  <li className="mobileShow" style={{ display: "none" }}>
                    <FlatButton style={{ fontSize: "13px", fontWeight: "600", backgroundColor: "rgba(0,0,0,0)", border: "0px solid white", color: "#D7C288", width: "120px", float: "right", height: "30px", lineHeight: "30px", position: "absolute", top: "25px", right: "270px", fontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica'" }} >
                      <Link to={"/user/" + this.props.userAddress} className={"buttonGlow"} style={{ textDecoration: "none", color: "white" }}>
                        PROFILE
                    </Link>
                    </FlatButton>
                  </li>
                }
                <li style={{ display: "inline" }}>
                  <FlatButton style={{ position: "absolute", right: "500px", top: "25px" }}>
                    <input type="text" placeholder="Search..." style={{ borderRadius: "10px", height: "15px" }} />
                  </FlatButton>
                </li>
                <li style={{ display: "inline" }}>
                  <FlatButton style={{ fontFamily: "Verdana, Geneva, sans-serif", lineHeight: "30px", fontSize: "25px", display: "inline", color: "white", float: "right", height: "30px", position: "absolute", right: "375px", top: "25px" }}>
                    About
              	</FlatButton>
                </li>
                <li>
                  <FlatButton style={{ fontFamily: "Verdana, Geneva, sans-serif", lineHeight: "30px", fontSize: "25px", display: "inline", color: "white", float: "right", height: "30px", position: "absolute", right: "150px", top: "25px" }}>
                    <Link to="/newBounty/" className={"buttonGlow"} style={{ textDecoration: "none", color: "white" }}>
                      Start a Project
                  </Link>
                  </FlatButton>
                </li>
                <li>
                  <FlatButton style={{ fontFamily: "Verdana, Geneva, sans-serif", lineHeight: "30px", fontSize: "25px", display: "inline", color: "white", float: "right", height: "30px", position: "absolute", right: "20px", top: "25px" }}>
                    Sign In
            		</FlatButton>
                </li>
                <li style={{ display: "none" }}>
                  <FlatButton style={{ fontSize: "13px", fontWeight: "600", backgroundColor: "rgba(0,0,0,0)", border: "0px solid white", color: "#D7C288", width: "120px", float: "right", height: "30px", lineHeight: "30px", position: "absolute", top: "25px", right: "270px", fontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica'" }} >
                    <Link to={"https://join.slack.com/t/bountiesnetwork/shared_invite/enQtMzA2Mjk3MzAzODQwLTZjN2UxMmU5MWYxZTVmMmM4OGNjZDRiMDgwYTVhOTIwYmQ4MjVlMjNkZjYzOTE4MWI4OTFhOWE4ZTUzN2MyNWY"} target="_blank" className={"buttonGlow"} style={{ textDecoration: "none", color: "#D7C288" }}>
                      COMMUNITY
                  </Link>
                  </FlatButton>
                </li>
                <li style={{ display: "none" }}>
                  <FlatButton style={{ fontSize: "13px", fontWeight: "600", backgroundColor: "rgba(0,0,0,0)", border: "0px solid white", color: "#D7C288", width: "120px", float: "left", height: "30px", lineHeight: "30px", position: "absolute", top: "25px", right: "150px", fontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica'" }} >
                    <Link to="/leaderboard/" className={"buttonGlow"} style={{ textDecoration: "none", color: "#D7C288" }}>
                      LEADERBOARD
                  </Link>
                  </FlatButton>
                </li>
                <li style={{ display: "none" }}>
                  <FlatButton style={{ fontSize: "13px", fontWeight: "600", backgroundColor: "rgba(0,0,0,0)", border: "0px solid white", color: "#D7C288", width: "120px", float: "right", height: "30px", lineHeight: "30px", position: "absolute", top: "25px", right: "30px", fontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica'" }} >
                    <Link to="/newBounty/" className={"buttonGlow"} style={{ textDecoration: "none", color: "#D7C288" }}>
                      NEW BOUNTY
                    </Link>
                  </FlatButton>
                </li>

                <li className="mobileShow" style={{ display: "none" }}>
                  <FlatButton style={{ fontSize: "13px", fontWeight: "600", backgroundColor: "rgba(0,0,0,0)", border: "0px solid white", color: "#D7C288", width: "120px", float: "right", height: "30px", lineHeight: "30px", position: "absolute", top: "25px", right: "30px", fontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica'" }} >
                    <Link to="/privacyPolicy/" className={"buttonGlow"} style={{ textDecoration: "none", color: "#D7C288" }}>
                      PRIVACY POLICY
                    </Link>
                  </FlatButton>
                </li>
                <li className="mobileShow" style={{ display: "none" }}>
                  <FlatButton style={{ fontSize: "13px", fontWeight: "600", backgroundColor: "rgba(0,0,0,0)", border: "0px solid white", color: "#D7C288", width: "120px", float: "right", height: "30px", lineHeight: "30px", position: "absolute", top: "25px", right: "30px", fontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica'" }} >
                    <Link to="/terms/" className={"buttonGlow"} style={{ textDecoration: "none", color: "#D7C288" }}>
                      TERMS OF SERVICE
                    </Link>
                  </FlatButton>
                </li>


              </ul>
            }
          />
        </div>
      </div>
    )
  }
}

export default Navigation
