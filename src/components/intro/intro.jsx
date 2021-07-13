import "./intro.scss";
import{ init } from "ityped"
import {useEffect, useRef} from "react";

export default function Intro(){
   const textRef = useRef();
    useEffect(() => {
        init(textRef.current,{
            showCursor:true,
            backDelay:1500,
            strings:["Developer","Designer"]
        });
        
    }, []);

    return(
        <div className="intro" id="intro">
            <div className="left"> 
            <div className="imgContainer">
                <img  className="img1" src="assets/myic_auto_x2.png" alt="my pic" />
            </div>
            </div>
            <div className="right"> 
            <div className="wrapper">
                <h2>Hii There, I'm</h2>
                <h1> Yogendra Prabhakar</h1>
                <h3>Creative <span ref={textRef}></span></h3> 
            </div>
            <a href="#portfolio">
                <img src="assets/angle-arrow-down.png" alt="" />
            </a>
            </div>
        </div>
    )
}