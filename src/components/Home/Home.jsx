import "./home.css";
import A from "../img/bg.mp4";

import React from "react";
import { Link } from "react-router-dom";

import First from "../First/First";
import Second from "../Second/Second";
import Third from "../Third/Third";
import Projects from '../Projects/Projects';




export default function Home(){

  return(
    
    <>
      <First firstWord="I" secondWord="create" lastWord="experiences"  />
      <Second />
      <Third />
    </>
  )

};




