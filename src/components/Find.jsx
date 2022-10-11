import { useState } from "react"
import {GoSearch} from "react-icons/go"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"


function Find() {
	//get value of input text in search bar on homepage
	//to do this, use useState()
	const [search, setSearch] = useState('');
	const navigation = useNavigate();
	const enterHandler = (e) => {
		e.preventDefault(); //prevents navigation bar from changing upon search request/pressing enter. Only recipe/page content will change.
		navigation('/found/'+ search); //navigates to specific page when user presses enter on search bar. So don't have to input the page in url.

	}
	//e is referring to the event
  return (
	  <StyleForm onSubmit={enterHandler}>
		<GoSearch></GoSearch>
		<input onChange={(e) =>setSearch(e.target.value)}type="text" value={search}/> 
	  </StyleForm>

	
  )
}
const StyleForm = styled.form `
	margin: 0rem 1rem;
	position: relative;
	width: 100%;
	
	input {
		border: none;
		background: linear-gradient(60deg, rgba(116,58,84,1) 0%, rgba(1,8,17,1) 100%);
		font-size: 1.5rem;
		color: white;
		padding: 1rem 3rem;
		border: none;
		border-radius: 1rem;
		outline: none;
		width: 100%

	}
	
`

export default Find