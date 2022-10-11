import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Home from './Home'
import Conversion from './Conversion' //to show calculator page
import {Route, Routes, useLocation} from 'react-router-dom' //this allows for multi page app
import Cuisine from './Cuisine'
import Found from './Found'
import Recipes from './Recipes'



function Pages() {
	const locate = useLocation();
  return (
	<AnimatePresence exitBeforeEnter>
		<Routes location={locate} key={locate.pathname}>
			<Route path="/" element={<Home/>} />
			<Route path="/cuisine/:type" element={<Cuisine/>} />
			<Route path="/conversion" element={<Conversion/>} />
			<Route path="/found/:find" element={<Found/>}/>
			<Route path="/recipes/:identity" element={<Recipes />} />
		</Routes>
	</AnimatePresence>
  )
}

export default Pages