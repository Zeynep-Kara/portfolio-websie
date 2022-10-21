import '../style/Contact.css'
import React, {useState} from 'react';


function Contact() {

  const [data, setData]= useState([
     {
        sectionName:"First Name",
        id: 0,
        type:"text",
        name: "firstName",
        value: ""
     },
     {
        sectionName:"Last Name",
        type:"text",
        name: "lastName",
        value: "",
        id: 1,
     },
     {
        sectionName:"E-mail",
        name: "email",
        placeholder:"",
        type:"email",
        value: "",
        id: 2,
     },
     {
        sectionName:"Phone Number",
        name: "phone",
        placeholder:"",
        type:"number",
        value: "",
        id: 3,
     },     
  ])

  const Array={};

  const [input, setInput]=useState({
    firstName: "",
    lastName: "",
    email: "",
    phone:0,
    message: ""
  });


  const formData=(name)=>(event)=>{
    setInput(p=>({...p, [name]:event.target.value}))
  }
  
  const print = (event) => {
    event.preventDefault();
    console.log(input);
  }; 

  return (
    <>
      <div id='contact' class="contactcontainer">
        <div>
            <h3>Get in Touch</h3>
            <h1>Contact Me</h1>
        </div> 
        <form id='form' onSubmit={print}>
            <div class="skillbarcontainer">
             {data.map( (data,index)=>(
              <div key={index} class="skillbar">
                <label for={data.sectionName}>{data.sectionName}</label>
                <input type={data.type} id={data.id} name={data.sectionName} onChange={formData(data.name)}/>               
              </div>
             ))}            
            </div> 
            <div>
              <textarea rows="6" cols="50" name="message" form="usrform" class="message" id='4' onChange={formData("message")}>Write a message...</textarea>
            </div>
            <input type="submit" value="Submit" class="button"/>             
        </form>              
      </div>      
      
    </>
  );
}

export default Contact;


