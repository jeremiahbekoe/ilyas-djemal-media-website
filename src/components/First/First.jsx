import "./First.css";
import A from "../img/bg.mp4";

import React from "react";
import { Link } from "react-router-dom";

export default function First(props){

const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  return <>
   <div className="h">
        <div className="h-main">
        <Link to="/projects" className="logo">IlyasDjemal</Link>
        <nav className="nav-links">
          <Link to="/projects" className="Button">Projects</Link>
          <Link to="/third" className="Button">Blogs</Link>
          {/* <a href="#" className="Button">People</a> */}
          {/* <a href="#" className="Button">Jobs</a> */}
          <Link to="/projects" className="Button">Contact</Link>
        </nav>
        <nav className="langu">
          {/* <a href="#" class="Button">DE</a> */}
          <Link to="/projects" className="Button">EN</Link>
        </nav>
        <div className="heading">{props.firstWord} <span className="underline">{props.secondWord} </span> <br />
        {props.lastWord}.
        </div>
        <div className="view">
        <Link to="/projects" className="Button-view">View Manifesto</Link>
        </div>
        <div className="date">{date}</div>
        <div className="company">
          {/* <img src={B} alt="CK" className="ck" /> */}
        </div>
        <video loop muted autoPlay className="backdrop">
        <source
          src={A}
          type="video/mp4"
        />
       </video>
         
        </div>
  </div>;


  </>
 
};




