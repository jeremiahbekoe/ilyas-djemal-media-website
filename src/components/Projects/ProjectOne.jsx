import "./projectone.css";
import C from "../img/_UNRULY_/PATRICK_ILYAS.JPG";
import D from "../img/cup.jpg";
import E from "../img/_UNRULY_/PATRICK_LONE.JPG";
import F from "../img/_UNRULY_/DK.JPEG";
import React from "react";
import { Link } from "react-router-dom";
import Projects from './Projects';
import Third from "../Third/Third";


const ProjectOne = () => {

    
    return <>


    <div className="t">
      <div className="rec">Recent <br /> Projects</div>
      <div className="rec-1">
          <h1 className="title-1">UNRULY </h1>
          <p className="des-1">POSITION IS DELIBERATELY CONTROLLED, THE ACTIONS WITHIN THEM MAY BE PERCEIVED AS UNRULY WHEN VIEWED THROUGH SHIFTING CULTURAL OR GENERATIONAL EXPECTATIONS OF SOCIAL DECORUM. THE WORK IS NOT CONCERNED WITH DOCUMENTING DISORDER, BUT WITH HOW “UNRULINESS” IS CONSTRUCTED THROUGH INTERPRETATION. IT ASKS WHETHER SUCH JUDGMENTS DESCRIBE BEHAVIOR ITSELF, OR THE FRAMEWORKS THROUGH WHICH BEHAVIOR IS UNDERSTOOD. BY STAGING SCENES THAT RESIST A SINGLE READING, THE SERIES HIGHLIGHTS THE INSTABILITY BETWEEN ACTION AND MEANING, WHERE ORDER AND DISRUPTION DEPEND ON PERSPECTIVE.</p>
          <div className="sub-rec-1">
              <img src={E} alt=""  className="picdrop"/>
          </div>
      </div>
      <div className="rec-2">
          <h1 className="title-1">PATRICK AND ILYAS </h1>
          <p className="des-1">Staged low-angle composition of two young men in a controlled scene, their posture and floor-level perspective producing interpretive ambiguity, where unruliness or implied narrative is constructed through expectation rather than depicted action.</p>
          <div className="sub-rec-1">
              <img src={C} alt=""  className="picdrop"/>
          </div>
      </div>
      <div className="rec-3">
          <h1 className="title-1">SMOKING IN PUBLIC</h1>
          <p className="des-1">A low shutter speed photograph of a young man smoking in a public alley at night, where the subject is open to shifting social interpretation, while the camera itself acts unruly through unstable shooting, rendering the moment as blur, afterimage, and temporal trace, with smoke forming a continuous line that disrupts visual clarity.</p>
          <div className="sub-rec-1">
              <img src={E} alt=""  className="picdrop"/>
          </div>
      </div>
      <div className="rec-4">
          <h1 className="title-1">DK PIC</h1>
          <p className="des-1">A close-up photograph of a young man shouting directly at the camera, his face filling the frame with an umbrella minimising distance, where the subject’s behaviour is overtly and intentionally unruly, camera shake and blur intensify immediacy, while dust-like masks disrupt visual clarity and collapse perceptual distance between subject and viewer.</p>
          <div className="sub-rec-1">
              <img src={F} alt=""  className="picdrop"/>
          </div>
      </div>
      <div className="oval-2">
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets2.lottiefiles.com/packages/lf20_avndu8kw.json"
        >
    </lottie-player>
    </div>
  </div>;
    
    
    </>
  

  
 
};

export default ProjectOne;