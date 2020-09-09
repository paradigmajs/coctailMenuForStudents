import React from 'react'
import {Link} from 'react-router-dom'

function All (props){
    return(
        <div key={props.key}>
            <Link to={'/coctail/'+props.coctail.strDrink}>
                <img style={{width:'250px'}} src={props.coctail.strDrinkThumb}/>
                <h4>{props.coctail.strDrink}</h4>
            </Link>
        </div>
    )
}

export default All