import '../style/Skills.css'
import React, {useState} from 'react';
import javascript from '../assets/javascript.jpg';
import html from '../assets/html.jpg';
import react from '../assets/react.jpg';

function Skills() {

  const [skills, setSkills]= useState([
    {
      skill: "Javascript", 
      logo:javascript,
      expression:"An object-oriented computer programming language commonly used to create interactive effects within web browsers."
    },
    {
      skill: "HTML", 
      logo:html,
      expression:"HTML stands for HyperText Markup Language. It is a standard markup language for web page creation.",
    },
    {
      skill: "React", 
      logo:react,
      expression:"React makes it painless to create interactive UIs. Design simple views for each state in your application."
    }
  ])

  return (
    <>      
      <div id="skills" class="skillcontainer">
        <div class="head">
          <h3>My Skills</h3>  
          <h1>My Expertise</h1>
        </div> 
        <div class="skillbarcontainer">
          {skills.map( (skills,index)=>(
           <div key={index} class="skillbar">
               <img src={skills.logo} class="image"/>
               <h4>{skills.skill}</h4>
               <p>{skills.expression}</p>
           </div>
          ))}
        </div>             
      </div>
    </>
    
  );
}

export default Skills;
