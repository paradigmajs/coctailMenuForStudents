
import React, {useState, useEffect} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {fetchByIngridient} from './actions'


function Ingridient(props){
    // const [datas, setData] = useState([])

    useEffect(() => {
        go()
    }, [])

    const go = async() =>{
        let name = props.match.params.ing
        props.fetchByIngridient(name)
    }
    const datas=props.ingridients
    return (
        <div>
        {datas.map(el=>{
            return(
                <div>
                <h1>Ingridient name {el.strIngredient}</h1>
            <h3>Description</h3>
                <p>
                    {el.strDescription ?
                        el.strDescription : "Information undefined"
                    }
                </p>
                </div>
            )
        })}
            
        </div>
    )
}

function mapDispatchToProps (dispath){
    return bindActionCreators({fetchByIngridient}, dispath)
  }
  
  function mapStateToProps({ingridients}){
    return {ingridients}
  }
export default connect (mapStateToProps, mapDispatchToProps)(Ingridient)
