import React, { useEffect } from 'react';

function Portfolio (props) {

  const anchorStyle = {
     align: 'center',
  }

  const aStyle = { 
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontSize: '15px',
    margin: '1% 10%',
   

  }
  return (
      
        <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              
      {props.data.projects.map ((project) =>  (
        // projectImage = 'images/portfolio/' + project.image
        
          <div key={project.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={project.url} title={project.title} target="_blank">
                <img alt={project.title} src={'images/portfolio/' + project.image} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{project.title}</h5>
                    <p>{project.category}</p>
                  </div>
                </div>
              </a>
             </div>
             <div style={anchorStyle}>
                <a style={aStyle} href={project.url} title={project.title} target="_blank" className="button btn project-btn"> <i className="fa fa-book"></i>View Source </a>
          
             </div>
            
          </div>
      ))}
            </div>
          </div>
        </div>
      </section> 

      )}

export default Portfolio;
