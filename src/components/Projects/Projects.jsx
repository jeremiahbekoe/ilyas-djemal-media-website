

import "./projects.css";
import A from "../img/bg.mp4";
import B from "../img/logo.png";
import React from "react";
import First from "../First/First";
import Home from "../Home/Home";
import ProjectOne from "./ProjectOne";
import { Link } from "react-router-dom";
import Third from "../Third/Third";






export default function Projects (){

return(
<>

  <First firstWord="Thousand" secondWord="Word" lastWord="Pictures" />
  <ProjectOne />
  <Third />
  </>
)} 



