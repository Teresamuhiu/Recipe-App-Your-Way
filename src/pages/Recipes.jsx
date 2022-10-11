import {useEffect} from "react"
import {useState} from "react"
import {useParams} from "react-router-dom"
import styled from "styled-components"
import {motion} from 'framer-motion'


import React from 'react'
//params.identity is referring back to the "Pages.jsx" file 
//it will be getting the id
function Recipes() {
	let params = useParams();
	const [information, setInformation] = useState({});
	const [activeButton, setActiveButton] = useState('directions');

	//get the info of each recipe from api
	const getInfo = async () => {
		const info = await fetch(`https://api.spoonacular.com/recipes/${params.identity}/information?apiKey=${process.env.REACT_APP_API_WEB_APP_KEY}`)
		const informRecipe = await info.json();
		setInformation(informRecipe);
		console.log(informRecipe);
	}
	useEffect(() => {
		getInfo();
	},[params.identity]);
	//Activate button using setActiveButton function
	//{activeButton === 'directions' ? 'active': ''} -:
	//-adds classname: "active" when activeTab has ingredients in it. Else no additons.
	//<h3 dangerouslySetInnerHTML={{__html:information.summary}}></h3>. This removes the html tags.
	//activeButton also checks that the "Directions and Ingredients" Buttons each have their respective content.
  return (
	<Grid
	  animate={{opacity: 1}} //fade into page
      initial = {{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 1.0}}
	>
	<InfoWrapper>
		<div>
			<h2>{information.title}</h2>
			<img src={information.image} alt="" />
		</div>
		<Data>
			<Button className = {activeButton === 'directions' ? 'active': ''}onClick={() => setActiveButton('directions')}> 
				Directions
			</Button>
			<Button className = {activeButton === 'ingredients' ? 'active': ''}onClick={() => setActiveButton('ingredients')}> 
				Ingredients
			</Button>
			{activeButton === 'directions'&& (<div> 
				<h3 dangerouslySetInnerHTML={{__html: information.summary}}></h3> 
				<h3 dangerouslySetInnerHTML={{__html: information.instructions}}></h3> 
			</div>)}
			{activeButton === 'ingredients'&& (<ul>
				{information.extendedIngredients.map((ingredient) => (
					<li key={ingredient.id}>{ingredient.original}</li>
				))}
			</ul> 
			)} 
		</Data>
	</InfoWrapper>
	</Grid>
  )
}
const Grid = styled(motion.div)` 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); 
  grid-gap: 3rem;

`;
const InfoWrapper = styled.div`
	margin-top: 6rem;
	margin-bottom: 3rem;
	display: flex;
	.active{
		background: linear-gradient(60deg, rgba(116,58,84,1) 0%, rgba(1,8,17,1) 100%);
		color: white;
	}
	img{
		border-radius: 3rem;
		postion: absolute;
		object-fit: cover;
		border: 3px dashed black;

		
	}
	li{
		line-height: 1.5rem;
		font-size: 1.4rem;
	}
	h2{
		margin-bottom: 2rem;
	}
	ul{
		margin-top: 2rem;
	}
`
const Data = styled.div `
	margin-left: 10rem;
`
const Button = styled.button `
	padding: 1rem 3rem;
	background: white;
	position: center;
	z-index: 10;
	border: 3px dashed black;
	margin-right: 1rem;
	font-weight: 500;
	font-size: 1.2rem;
	
`

export default Recipes