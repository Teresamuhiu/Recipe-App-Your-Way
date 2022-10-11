//import {GoSearch} from "react-icons/go"
//import { useNavigate } from "react-router-dom";
//import styled from "styled-components"
import React from 'react'
//import { useState } from "react"


//conversion measurements:
//1oz=28.3g
//1lb = 453g
//1US Cup = 23658ml
//1US Cup = 128grams
//1tablespoon = 14.3grams
//3 teaspoons = 14.3grams

//calculate ounces to grams
//Is not loading on conversion page.


function Calculator(valNum){
  
  <h3 dangerouslySetInnerHTML={{__html:("outputGrams").valNum*28.3}}></h3>;

  //<h3 dangerouslySetInnerHTML={{__html: valNum*28.3}}></h3> //!!!!displaying HTMl but not calculation on conversion page!
 
  
  //get value of input text in search bar on homepage
	//to do this, use useState()

/* 	const [convert, setConvert] = useState('');
	const calculate = useNavigate();
	const enterHandler = (e) => {
		e.preventDefault(); //prevents navigation bar from changing upon search request/pressing enter. Only recipe/page content will change.
		calculate('/conversion/'+ convert); //navigates to specific page when user presses enter on search bar. So don't have to input the page in url.

	}
  return (
    <div>
      <StyleForm onSubmit={enterHandler}>
      <GoSearch></GoSearch>
      <input onChange={(e) =>setConvert(e.target.value)}type="text" value={convert}/> 
      </StyleForm> */
   return (
    <div>
      <title>Ounces to Grams Conversion</title>
      <h2>Measuring Unit Converter</h2>
      <p>Type measuring unit in the Ounces field to convert to Grams:</p>
      <p>
        <label>Ounces</label>
        <input id="inputOunces" type="number" placeholder="Ounces"/> {/* oninput="Calculator(this.value)" onchange="Calculator(this.value)"/> */}
      </p>
      <p>Grams: <span id="outputGrams"></span></p>
  </div>
 


  )
}
/* const StyleForm = styled.form `
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
	
`  */
export default Calculator  