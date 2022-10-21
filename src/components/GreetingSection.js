import '../style/Greeting.css';
import profile_photo from '../assets/profile_photo.jpg';
import React, {useState} from 'react';

const user = {
  firstName: 'Zeynep',
  lastName: 'Kara'
};


function Greeting() {

  const [menuBar, setMenuBar]= useState([
    {name:"Home", link:'#home'},
    {name:"Portfolio", link:'#skills'},
    {name:"About me", link:'#about'},
    {name:"Contact me", link:'#contact'}
  ]);

  return (
    <>
      <div id='home'>
        <div class="menuBar">
        {menuBar.map( (select,index)=>(
          <div key={index} class="select">
              <a href={select.link}>
                {select.name}
              </a>
          </div>
         ))}
        </div>
      </div>  

      <div class="container">
        <div class="greetingWriting">
          <h1>Hello, </h1>
          <h1>I am {user.firstName}</h1>
          <div class="extraWriting">
            <h3>Computer Engineering Student at Istanbul Technical University</h3>
            <h3>Frontend Developer at MDP Group</h3>
          </div>
        </div>        
        <img src={profile_photo} class="photo"/>        
      </div>
    </>
  );
}

export default Greeting;