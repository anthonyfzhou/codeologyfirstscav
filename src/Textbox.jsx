import React, { Component } from 'react';
import './Textbox.css';
const prompts = ["hey so I may have gotten a little carried away with this",
				"but here we are so you better immerse yourself in the story experience",
				"so just, uhhhh, go along with it!!",
				"you have been kidnapped by the codeology officer team for high treason",
				"something along the lines of slandering our mascot? idk it was a kangaroo court",
				"in any case, you hear a voice over the speakers, it's anthony (that's me)",
				"'hey super sorry about kidnapping you but uhhh I made these puzzles for you they're enjoyable to solve TRUSSST'",
				"'in each stage you'll have to find a password and message it to me'",
				"'damn my voice is a little HOARSE, so imma catch you guys later'"];

class Textbox extends Component {
	constructor(props) {
		super(props);
		this.state = {text: prompts,
					  max: 9,
					  index: 0
					 };
		
		this.handleForward = this.handleForward.bind(this);
		this.handleBackwards = this.handleBackwards.bind(this);
	}
	
	handleForward() {
		console.log(this.state.index);
		if (this.state.index < (this.state.max - 1)) {
			this.setState({index: this.state.index + 1});
		}
	}
	
	handleBackwards() {
		if (this.state.index > 0) {
			this.setState({index: this.state.index - 1});
		}
	}
	
	renderBackwardsButton() {
		if (this.state.index == 0) {
			return null;
		}
		return <button onClick={this.handleBackwards}>Previous</button>;
	}
	
	renderForwardsButton() {
		if (this.state.index >= this.state.max - 1) {
			return null;
		}
		return <button onClick={this.handleForward}>Next</button>;
	}
	
	renderContent() {
		if (this.state.index >= this.state.max - 1) {
			return <div className="content">
					     <img id="horse" src={require('./horse.jpg').default} />
					     <img id="roshan" src={require('./thepasswordisalbatross.jpg').default} />
						 <img id="chowder" src={require('./chowder.jpg').default} />
					   </div>;
		}
		return null;
	}
	
	render() {
		let content = this.renderContent();
		let forwardButton = this.renderForwardsButton();
		let backwardsButton = this.renderBackwardsButton();
		
		return (
			<div>
				<div id="textDisplay"> {this.state.text[this.state.index]} </div>
				<div>
					{backwardsButton}
					{forwardButton}
				</div>
				{content}
			</div>
		)
	}
}

export default Textbox;
