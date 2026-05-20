import "./second.css";
import React from "react";

// import { LottiePlayer } from "@lottiefiles/lottie-player";

{/* I’m me. I’m Im.
An aspiring creative from West London, I seek freedom through creativity.
 I don’t claim to have a fixed philosophy behind my work beyond
 the act of creating itself; I believe art should inspire, provoke, and challenge.
  Above all, I create as a means of self-expression.

Too often, art is made to impress, to sell an idea, or to explain. I’m more interested 
in what it reveals 
rather than what it tries to prove.


I have a varied background, with an education in English and Drama, 
and I have worked as a Learning Support Worker for the past seven years,
 supporting students with additional and special needs.
  
 I began working in freelance photography and videography in 2024, 
 a path I continue to develop with the aim of expanding my practice
  further.
My long-term ambition is to write and direct film, a goal I’ve held since childhood.
The name Im is a result of various forms 
of play surrounding language. But most importantly. 
That I need not need anyone but myself.
-Ilyas Mansour (IM) Djemal */}




const Second = () => {
  return <div className="s">
      <div className="mani">Manifesto</div>
      <div className="text-way">


          <p className="about">
          I’m me. I'm <sub>Im</sub>. An aspiring <span>creative</span> from <br /> West London . I <sub>seek freedom</sub> <br />
          through creativity. I don’t claim to  <br />
          have a fixed philosophy behind my work beyond <br />the act of creating itself;<br/>
          <sub>I believe art should inspire, provoke, and challenge. </sub><br></br>
          <sub>Above all, I create as a means of self-expression.</sub>
          </p>


                               <p className="about-2">
          Too often, art is made to impress,to sell an  <br />  idea, or to explain. I'm <sub>more interested</sub> <br />
          in what it reveals rather than what it <br /> tries to prove.

          </p>



           <p className="about-3">
          I have a varied background, with an education  <br />in English and <sub>Drama</sub>
          and I have worked <br /> as as a Learning Support Worker <br />
           for the past seven years, supporting <br />students 
           with additional and special needs.

          </p>



           <p className="about-4">
          I began working in freelance photography <br /> and  videography in 2024 a path I continue to develop <br />with the aim of expanding
           <sub>my practice</sub>further.


          </p>




        <p className="about-5">
          My long-term ambition is to write and direct film<br />  a goal I’ve held since
           childhood. The name <sub>Im</sub>  is a result of various forms of play surrounding
          language. <br /> But most importantly, that I need not need anyone but myself.
          <br></br>
          <br></br>
          - Ilyas Mansour (IM) Djemal

          </p>





          {/*The name Im is a result of various forms 
of play surrounding language. But most importantly. 
That I need not need anyone but myself.
-Ilyas Mansour (IM) Djemal */}

                                         {/* <p className="about-5">
          Too often, art is made to impress,<br /> to sell an idea, or to explain. I'm <sub>more interested</sub> <br />
          in what it reveals rather than what it <br /> tries to prove.

          </p> */}




{/* 
                   <p className="about-4">
           I began working in freelance photography <br/> and videography in 2024, 
 a path I continue to develop with the aim of expanding my practice
  further.<br /> to sell an idea, or to explain. I'm <sub>more interested</sub> <br />
          in what it reveals rather than what it <br /> tries to prove. <br />
          <sub></sub> I see the artists through a deeper lense, the audience, <br/>
          messages and pour them into stories and <span className="underline">experiences.<br/></span>
          </p>  */}
{/* 


        {/* <p className="about-3">
          <br />
          through the possibilities and find ways. With heart and <br />
          mind, we see the people behind the audience, form <br />
          messages and pour them into stories and experiences.
        </p>


  

        </p> */}

      </div>
      <div className="oval">
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets2.lottiefiles.com/packages/lf20_avndu8kw.json"
        >
    </lottie-player>
      </div>
  </div>;
};

export default Second;