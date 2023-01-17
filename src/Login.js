import {Component} from 'react'

export default class login extends Component{
	state={
		username:"",
		password:""
	}
	handleChange=(op)=>{
		this.setState({
			[op.target.name]:op.target.value
		})
	}
	handleClick=()=>{
		console.log(this.state.username,this.state.password)
	}
	render(){
		return(
			<div>
			Login form<br/>
				<input name="username" onChange={this.handleChange} placeholder= "Enter your name"/>
				<input name="password" onChange={this.handlePassword} placeholder= "Enter your password"/>
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
}