import { useEffect, useState } from "react"
import { BigNavbar } from "./BigNavbar"
import img from "./claruswayLogoSmall.png"
import {data} from "./NavbarProperties"
import { SmallNavbar } from "./SmallNavbar"
export const Navbar = () => {

    const [options, SetOptions] = useState(false)
    const [toggle, setToggle] = useState(false)

    const hideOptions = () => {
        if (window.innerWidth <= 1000 ){
            SetOptions(true)
        }else{
            SetOptions(false)
            setToggle(false)
        }
    }

    const handleToggle = () => {
        if (window.innerWidth <= 1000 ){
            setToggle(!toggle)
        }
        
    }
    window.addEventListener("resize",hideOptions)

    
    useEffect(()=> {
        hideOptions()
    },[])

    return(

        <div>
        
            <div className="main-header">
                <div className="header-left-image">
                    <a href="" ><img src={img} alt="clarusway logo" className="image-properties" /></a>
                </div>
                
                    {
                        options ? <div className="icon-div">
                        <i className="fas fa-bars"
                        id="icon"
                        onClick={handleToggle}
                        />
                        </div> :
                        <div className="header-right">
                        <BigNavbar />
                        </div>
                    }
                
            </div>
            <div className={toggle ? "options-container visible" : "options-container"}>
                    <SmallNavbar /> 
            </div>
        </div>

    )

}