import "./topbar.scss";
// import {Person,Mail} from "@material-ui/icons"
import { MdEmail } from "react-icons/md";
import { BsFillPersonFill} from "react-icons/bs";

export default function Topbar({menuOpen, setMenuOpen}){
    return(
        <div  className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper"> 
                <div className="left">
                    <a href="#intro" className="logo">Yogendra</a> 
                    <div className="itemContainer">
                     <BsFillPersonFill className="icon"/><span>+91 8941 92 8229</span>
                    </div>
                    <div className="itemContainer">
                     <MdEmail className="icon" /><span>yogendra301295@gmail.com</span>
                    </div>
                </div>
                 
           <div className="right">
               <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                   <span className="line1"></span>
                   <span className="line2"></span>
                   <span className="line3"></span> 
               </div>
           </div>
            </div> 
        </div>
    )
}   