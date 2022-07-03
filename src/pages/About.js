import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Riya Bhat</div>
            <div className="brief_description">
              Hello! My name is Riya Bhat. I am a rising junior at UW-Madison majoring in Computer Science and engineering. Fun fact about me is that I have jumped into Lake Mendota in -5 degree celcius!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
