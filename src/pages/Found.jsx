import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {useEffect} from 'react';
import {useState} from 'react'
import {useParams} from "react-router-dom"
import {motion} from 'framer-motion'



function Found() {
  const [foundRecipes, setFoundRecipes] = useState([]);
  let params = useParams();
  const getFound = async (identity) => {
    const info = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_WEB_APP_KEY}&number=100&query=${identity}`)
    const recipes = await info.json();
    setFoundRecipes(recipes.results);
  }
  useEffect(() => {
    getFound(params.find); //take in query from params
  },[params.find]);

  return (
	  <Grid
      animate={{opacity: 1}} //fade into page
      initial = {{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 1.0}}
    >
      {foundRecipes.map((recipe) => {
        return(
          <Card key={recipe.id}>
             <Link to={'/recipes/'+ recipe.id}> 
            <img src={recipe.image} alt="" />
            <h4>{recipe.title}</h4>
            </Link>
          </Card>
        )
    })}
   </Grid>
  )
}

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

export default Found