import React from 'react'
import ReactDOM from 'react-dom'

import Recom from './components/recom'
import Cfoot from './components/cfoot'

class App extends React.Component{
	render(){
		return(
			<div>
			
				<header></header>
				<section style={this.cy_sec}><Recom /></section>
				<footer style={this.cy_bot}><Cfoot /></footer>
			</div>
		)
	}
}

App.prototype.cy_bot={
	position:'fixed',
	width:'100%',
	bottom:'0'
}
ReactDOM.render(<App />,document.getElementById('out'))
