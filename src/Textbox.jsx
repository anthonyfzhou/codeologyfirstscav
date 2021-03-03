import React, { Component } from 'react';
import './Textbox.css';
const prompts = ["prompt1",
				"prompt2",
				"prompt3",
				"prompt4",
				"prompt5"];

class Textbox extends Component {
	constructor(props) {
		super(props);
		this.state = {text: prompts,
					  max: 5,
					  index: 0
					 };
		
		this.handleForward = this.handleForward.bind(this);
		this.handleBackwards = this.handleBackwards.bind(this);
	}
	
	handleForward() {
		if (this.state.index < (this.state.max - 1)) {
			this.setState({index: this.state.index + 1});
		}
	}
	
	handleBackwards() {
		if (this.state.index > 0) {
			this.setState({index: this.state.index - 1});
		}
	}
	
	render() {
		let pictures;
		if (this.state.index >= 4) {
			pictures = <div className="pictureHolder">
					     <img id="horse" src={require('./horse.jpg').default} />
					     <img id="roshan" src={require('./thepasswordisalbatross.jpg').default} />
						 <img id="chowder" src={require('./chowder.jpg').default} />
					   </div>;
		} else {
			pictures = null;
		}
		
		return (
			<div>
				<div id="textDisplay"> {this.state.text[this.state.index]} </div>
				<button onClick={this.handleBackwards}>Backwards</button>
				<button onClick={this.handleForward}>Forward</button>
				{pictures}
			</div>
		)
	}
}

export default Textbox;
