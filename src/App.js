//I learned the skeletal structure of this code with its css elememts 
//by Youtuber "Dev Ed" who provided a Youtube Video Tutorial on a React App. 
//Also learned from different youtube tutorials on creating a React App.
//References:
//Ed, D., 2022. React Crash Course - Build A Full Recipe App Tutorial. [online] Youtube. Available at: <https://youtu.be/xc4uOzlndAk> [Accessed 10 May 2022].
//Youtube. 2022. React JS Crash Course. [online] Available at: <https://youtu.be/w7ejDZ8SWv8> [Accessed 10 May 2022]. 
//Youtube. 2022. Learn React in 30 Minutes. [online] Available at: <https://youtu.be/hQAHSlTtcmY> [Accessed 10 May 2022].
import Pages from "./pages/Pages";
import { Link } from "react-router-dom";
import {GiCook} from "react-icons/gi"
import styled from "styled-components";
import {BrowserRouter} from "react-router-dom"
import Navigation from "./components/Navigation";
import Find from "./components/Find";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiCook color="#023373" className="SearchIcon"/>
        <YourWayLogo to={'/'}>Your Way</YourWayLogo>
      </Nav>
        <Find />
        <Navigation/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}
const Nav = styled.div `
  padding: 3rem 0rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const YourWayLogo = styled(Link)`
  font-weight: 500;
  font-size: 2rem;
  text-decoration: none;
  font-family: 'Dancing Script', cursive;

  svg{
    font-size: 3rem;
  }
`
export default App;
