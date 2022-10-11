//make the components to then add to the pages folder
//So: Home"Page" will have a Trending Component and Vegetable Component

import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css" //allows for animation of cards
import styled from "styled-components"

//async is for the data needed to wait for. Need to get data before render.
//useEffect runs getTrending when it gets mounted.
//arrays makes sure it only runs when the Trending component is mounted. Also passes empty infomation in there.
function Trending() {

	const [trending, setTrending] = useState ([])
	
	
  useEffect(() =>{
	getTrending()
  },[])

//below is a necessary function to prevent 
//over fetching of different recipes from API every time page loads.
//This is to prevent reaching the API limit of requests per day.
//If "trending" is already saved and stored in "local storage", then
//no need to fetch other recipes from api(unless you don't mind the API limit).
// Instead, just parse "trending" from a string to an array.
//If not, fetch the api for recipe.

  const getTrending = async () => {
	const item = localStorage.getItem('trending')
	if(item) {
		setTrending(JSON.parse(item))
	}else{
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_WEB_APP_KEY}&number=20`
		)
		const info = await api.json()
		localStorage.setItem('trending', JSON.stringify(info.recipes))
		setTrending(info.recipes)
	  	console.log(info.recipes)
	}

  }	
  //mapping over all 10 recipes and presenting an output
  //For example: mapping over {recipe.title} will first go over the first recipe
  //then check its title and present a paragraph of the title on the screen.
  return (
	<div>
			
				<Wrapper>
					<h3>Most Viewed</h3>
					<Splide options={{
						perPage: 3,
						pagination: false,
						arrows: false,
						drag: 'free',
						gap: '3rem', //gap between recipes showing on homepage
					}}>
					{trending.map((recipe)=> { //map allows for a loop function over the recipes //"link" tag for clicking on recipe card to get to recipe page
						return(
							<SplideSlide key={recipe.id}> 
							<Card>
								<Link to={'/recipes/' + recipe.id}> 
								<p>{recipe.title}</p>
								<img src={recipe.image} alt={recipe.title} />
								<Gradient />
								</Link>
							</Card>
							</SplideSlide>
						)
					})}
					</Splide>
				</Wrapper>
			
		
	</div>
  )
}

const Wrapper = styled.div`
	margin: 4rem 0rem;
`;
//css of styling of Cards below from React App Tutorial by the Creator: "Dev Ed" on Youtube.
//Used this reference as template for structure/layout of styling of cards for a react app.

const Card = styled.div`
	min-height: 10rem;
	border-radius: 2rem;
	overflow: hidden;
	position: relative;
	border: 2px solid black;
	
	img{
		border-radius: 2rem;
		postion: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		
	}
	p{
		position: absolute;
		z-index: 10;
		left: 50%;
		bottom: 0%;
		transform: translate(-50%, 0%);
		color: #F0FFFF;
		width: 100%;
		text-align: center;
		font-weight: 600;
		font-size: 1rem;
		height: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
				
	}
`
const Gradient = styled.div`
	z-index: 4;
	postion: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`


export default Trending