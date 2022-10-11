import {GiFastNoodles, GiHotSpices, GiFrenchFries, GiFullPizza} from "react-icons/gi"
import {NavLink} from "react-router-dom"
import styled from 'styled-components'


function Navigation() {
  return (
	<Nav>
		<Style to={'/cuisine/Chinese'}>
			<GiFastNoodles color="#023373" className="SearchIcon"/>
			<h4>Chinese</h4>
		</Style>
		<Style to={'/cuisine/Indian'}>
			<GiHotSpices color="#730202" className="SearchIcon"/>
			<h4>Indian</h4>
		</Style>
		<Style to={'/cuisine/American'}>
			<GiFrenchFries color="#e6da3c" className="SearchIcon"/>
			<h4>American</h4>
		</Style>
		<Style to={'/cuisine/Italian'}>
			<GiFullPizza color="#023373" className="SearchIcon"/>
			<h4>Italian</h4>
		</Style>
	</Nav>
  )
}

const Nav = styled.div` 
	display: flex;
	justify-content: center;
	margin: 1rem 0rem;
`

const Style = styled(NavLink)`
	display: flex;
	text-decoration: none;
	flex-direction: column;
	margin-right: 3rem;
	align-items: center;
	justify-content: center;
	border-radius: 0.5rem;

	&.active{
		background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
	}
`

export default Navigation
