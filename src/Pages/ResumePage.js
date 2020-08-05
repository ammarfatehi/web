import React from 'react';
import resume from '../assets/images/resume.PNG';
import Hero from '../components/Hero';



function ResumePage(props){

    return(
        <div>
         <Hero title={props.title} />  
        <img className = "f-resume" src={resume} alt='logo'   />
        </div> 
    );
}

export default ResumePage;