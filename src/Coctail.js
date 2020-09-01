import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Coctail extends Component {

    state={
        data:[]
    }

    async componentDidMount() {
        let name = this.props.match.params.name
        let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
        let data = await resp.json()
    
        this.setState({
          data:data.drinks[0]
        })
        console.log(data)
    }
    render() {
        return (
            <div>
                <h1>{this.state.data.strDrink}</h1>
                <img style={{width:'300px'}} src={this.state.data.strDrinkThumb}/>
                <p>Instruction: {this.state.data.strInstructions}</p>
                <h6>Ingridients</h6>
                <ul> 
                    <Link to={'/ingridient/' +  this.state.data.strIngredient1}><li>{this.state.data.strIngredient1}</li></Link>
                    <Link to={'/ingridient/' +  this.state.data.strIngredient2}><li>{this.state.data.strIngredient2}</li></Link>
                    <Link to={'/ingridient/' +  this.state.data.strIngredient3}><li>{this.state.data.strIngredient3}</li></Link>
                    <Link to={'/ingridient/' +  this.state.data.strIngredient4}><li>{this.state.data.strIngredient4}</li></Link>
                </ul>
                <h6>Measure</h6>
                <ul> 
                    <li>{this.state.data.strMeasure1}</li>
                    <li>{this.state.data.strMeasure2}</li>
                    <li>{this.state.data.strMeasure3}</li>
                    <li>{this.state.data.strMeasure4}</li>
                </ul>
            </div>
        )
    }
}
