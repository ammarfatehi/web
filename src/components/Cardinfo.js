import React from 'react';
import {useSpring,animated} from 'react-spring';


function Cardinfo(props) {

    const style = useSpring({opacity:1, from:{opacity: 0}});

    return(
        <animated.div className= "f-card-info" style = {style}>
            <p className="f-card-title">{props.title}</p>
            <p className="f-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target = "_blank" rel="noopener noreferrer"> View </a>
        </animated.div>
    );
}

export default Cardinfo;