import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function ProjectPage(props){

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hi, my name is Ammar. I am a rising sophomore at the University of Texas at Austin, studying Electrical and Computer Engineering.</p>
                <p>I commit myself to be a life long learner, am always hungry to tackle new skills and subjects. Whether it be in understanding machine learning or cooking, I love examining new ways to view the world and to solve problems.</p>
                <p>When I am not coding, I spend most of my time outdoors. Every year I pick a new sport or activity to prusue and try my hardest to imrpove at it. My current activity is mountain biking. I have been at it for a few months now and definetly recommend you try. Its fun, fast, and definitely gives you an insane adrenaline rush.</p>
                <p>Have a look around and feel free to contact me with any feedback. Enjoy!</p>
            </Content>
        </div>
    );
}

export default ProjectPage;