import {Link} from 'react-router-dom'

export default function Navigation(){
	return(
		<div className="navbar">
			<Link to="/">Home</Link>
			<Link to="/Login">Login</Link>
			<Link to="/Products">Products</Link>
			<Link to="/Cart">Cart</Link>
		</div>
	)
}