import React, { Component } from 'react';

function Resume (props) {

  const getRandomColor = () =>  {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const skillmessage = props.data.skillmessage;
  
  return(
    // if(props.data){
      // var skillmessage = props.data.skillmessage;
      // var education = props.data.education.map(function(education){
      //   return <div key={education.school}><h3>{education.school}</h3>
      //   <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      //   <p>{education.description}</p></div>
      // })
    //   var work = props.data.work.map(function(work){
    //     return <div key={work.company}><h3>{work.company}</h3>
    //         <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
    //         <p>{work.description}</p>
    //     </div>
    //   })

    //   var skills = props.data.skills.map((skills)=>{
    //     var className = 'bar-expand '+skills.name.toLowerCase();
    //     return (
    //       <li key={skills.name}>
    //         <span style={{width:skills.level, backgroundColor:getRandomColor()}}className={className}></span><em>{skills.name}</em>
    //       </li>
    //     )
    //   })
    // }

    // return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {props.data.education.map(function(education){
        <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {props.data.work.map(function(work){
         <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>
              {skillmessage}

            </p>

				<div className="bars">
				   <ul className="skills">
					  {props.data.skills.map((skills)=>{
        //  className = 'bar-expand '+skills.name.toLowerCase();
          <li key={skills.name}>
            <span style={{width:skills.level, backgroundColor:getRandomColor()}}className={'bar-expand '+skills.name.toLowerCase()}></span><em>{skills.name}</em>
          </li>
      })
    }
					</ul>
				</div>
			</div>
      </div>
   </section>
    // );
  )
}

export default Resume;
