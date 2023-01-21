import './heading.css';
import { Fragment } from "react"
export function Heading({heading}){
    return(
        <Fragment>
            <h2 className="primary-heading">{heading}</h2>
        </Fragment>
    )
}