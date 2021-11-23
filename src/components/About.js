import React from "react";

function About(props) {
  console.log(props);
  function IsBio(){
    console.log(props.bio)
    if(props.bio){
      return (
        <p>{props.bio}</p>
      )
    } else{
      return null;
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      <IsBio />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links 
      github = {props['github']}
      linkedin = {props['linkedin']}
      />
    </div>
  );
}

const Links = (props) => {
  console.log(props)
  return (
  <div>
  <h3>Links</h3>
  <a href={props.github}>{props.github}</a>
  <a href={props.linkedin}>{props.linkedin}</a>
  </div>
  )
}

export default About;
