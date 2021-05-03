import {data} from "./NavbarProperties"
export const SmallNavbar = () => {
    return(
        <div className="options-container">
                    {
                        data.map((element) => (
                            <div className="small-header-div">
                                <a href={element.href} className="small-header-links">{element.name}</a>
                            </div>
                        ))
                    }
            </div>
    )
}