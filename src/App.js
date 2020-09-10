import React, {useState, useEffect} from 'react'
import All from './All'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {fetchCoctail} from './actions'


function App  (props) {
    useEffect(() => {
    go()
  }, [])
  const go = ()=>{
    props.fetchCoctail(null, 'getAll')
  }
  const search=(val)=>{
    let name = val  
    if(name=== 'Non_Alcoholic'){
      props.fetchCoctail(name, 'fetchByAlc')
    }else if(name === 'Alcoholic'){
      props.fetchCoctail(name, 'fetchByAlc')
    }else{
      go()
    }
  }       
  const filterByName= (val)=>{
    if(val !== ''){
      props.fetchCoctail(val, 'filterByName')
    }
    else{
      go()
    }
  }
  const coc = props.coctails[0]
    return (
      
      <div>
        <h1>Coctails</h1>

        <input 
            placeholder="search coctail by name"
            type="text"
            onChange={(e)=>{
              filterByName(e.target.value)
            }}
         />

        <select onChange={(e)=>{
          search(e.target.value)
        }}>
          <option value="Coctail">ALL</option>
          <option value="Non_Alcoholic">NON-ALC</option>
          <option value="Alcoholic">ALC</option>
        </select>
        {coc ? 
          coc.map(elem=>{
            return (
              <All coctail={elem} key={elem.name}/>
            )
          }):null
        }
      </div>
    )
  
}
function mapDispatchToProps (dispath){
  return bindActionCreators({fetchCoctail}, dispath)
}

function mapStateToProps({coctails}){
  return {coctails}
}

export default connect (mapStateToProps, mapDispatchToProps)(App)
