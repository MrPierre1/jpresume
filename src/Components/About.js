import React, { } from 'react';

function About(props) {

   const profilepic = "images/" + props.data.image;
   const bio = props.data.bio;

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src={profilepic} />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>

               <p>{bio}</p>
               <div className="row">
                  <div className="columns download">

                  </div>
               </div>
            </div>
         </div>

      </section>
   );
}

export default About;
