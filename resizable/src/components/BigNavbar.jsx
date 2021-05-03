import { data } from "./NavbarProperties"

export const BigNavbar = () => {

    return(
        
        data.map((element) => (
            <div className="links-div"><a className="links" href={element.href}>{element.name}</a></div>
        ))
    )
}