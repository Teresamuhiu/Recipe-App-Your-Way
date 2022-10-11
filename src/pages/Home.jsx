import Trending from "../components/Trending" //will have two components. 
import Vegetables from "../components/Vegetables"  //This will be: Trending and Vegetables Components
//import Navigation from "../components/Navigation"
import {motion} from "framer-motion"; //this allows for transistion of items

import React from 'react'
//render the components in the function below
function Home() {
  return (
	<motion.div
	  animate={{opacity: 1}} //fade into page
      initial = {{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 1.0}}
	  //preset="moveToLeftFromRight"
	  
	>
		<Trending />
		<Vegetables />
		</motion.div>
		
	
  )
}

export default Home