//function of react router from "Dev Ed" on Youtube.
//This allows the Cuisine Page to be linked to Homepage

import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  
  let params = useParams();
  const getCuisine = async (identity) => {
    const info = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_WEB_APP_KEY}&number=100&cuisine=${identity}`)
    const recipes = await info.json();
    setCuisine(recipes.results);
  }
  useEffect(() => {
    getCuisine(params.type); //function fetches specific cuisine when page gets mounted
    console.log(params.type);
  },[params.type]);

  return (
	  <Grid
      animate={{opacity: 1}} //fade into page
      initial = {{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 1.0}}
    >
      {cuisine.map((recipe) => {
        return(
          <Card key={recipe.id}>
            <Link to={'/recipes/'+ recipe.id}> 
            <img src={recipe.image} alt=""/>
            <h4>{recipe.title}</h4>
            </Link>
          </Card>
        )

      })}
    </Grid>
  )
}
//display a responsive grid

const Grid = styled(motion.div)` 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); 
  grid-gap: 3rem;

`;

const Card = styled.div`
  a {
    text-decoration: none;
  } 
  img {
    width: 100%;
    border-radius: 3rem;
    border: 2px solid black;
  }
  h4 {
    text-align: center;
    padding: 2rem;
  }
 
`

export default Cuisine