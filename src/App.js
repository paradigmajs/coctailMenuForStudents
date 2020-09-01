import React, { Component } from 'react'
import All from './All'
export default class App extends Component {
  
  state={
    data:[]
  }
  componentDidMount (){
    this.go()
  }
  go = async ()=>{
    let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    let data = await resp.json()

    this.setState({
      data:data.drinks
    })

  }
  search=(val)=>{
    let name = val
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='
    if(name=== 'Non_Alcoholic'){
      this.find(name, url)
    }else if(name === 'Alcoholic'){
      this.find(name, url)
    }else{
      this.go()
    }

  }

  find = async (name, url)=>{
    let resp  = await fetch (url+name)
    let data = await resp.json()
    this.setState({
      data:data.drinks
    })
  }
  render() {
    return (
      <div>
        <h1>Coctails</h1>
        <select onChange={(e)=>{
          this.search(e.target.value)
        }}>
          <option value="Coctail">ALL</option>
          <option value="Non_Alcoholic">NON-ALC</option>
          <option value="Alcoholic">ALC</option>
        </select>
        {this.state ? 
          this.state.data.map(elem=>{
            return (
              <All coctail = {elem}/>
            )
          }):null
        }
      </div>
    )
  }
}
