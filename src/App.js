import React, {useState, useEffect} from 'react'
import All from './All'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {fetchCoctail} from './actions'

function App  (props) {

  const [data,setData] = useState(null)
  
  useEffect(() => {
    go()
  }, [])
  
  const go = ()=>{
   props.fetchCoctail()
  }
  const search=(val)=>{
    let name = val
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='
    if(name=== 'Non_Alcoholic'){
      find(name, url)
    }else if(name === 'Alcoholic'){
      find(name, url)
    }else{
      go()
    }
  }       

  const find = async (name, url)=>{
    let resp  = await fetch (url+name)
    let data = await resp.json()
    setData(data.drinks)
  }

  const filterByName= async (val)=>{
    if(val !== ''){
      let resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+val)
      let data = await resp.json()
      setData(data.drinks)
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
