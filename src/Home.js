import React, { Component } from 'react';
import { Grid, Header, Dimmer, Icon } from 'semantic-ui-react';
import Axios from 'axios';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			loading: true,
			matchData: null,
		 }
		this.getMatch = this.getMatch.bind(this);
	}

	getMatch() {
		Axios.get('/session')
		.then(result => {
			const test = JSON.parse(result.data.replace(/\0.*$/g,''));
			console.log(test)
			this.setState({
				loading: false,
				matchData: test
			})
		})
		.catch((err) => {console.log(err)});
	}
	componentDidMount() {
		this.interval = setInterval(() => this.getMatch(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		if(this.state.loading){
			return(
				<Dimmer>
					Loading...
				</Dimmer>
			);
		} else {
			return ( 
				<Grid divided="vertically">
					<Icon name="check circle"/> 
					<Grid.Row columns={2}>
						<Grid.Column>
							<Header>Blue Team</Header>
						</Grid.Column>
						<Grid.Column>
							<Header>Orange Team</Header>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={2}>
						<Grid.Column>
							{this.state.matchData.teams[0].posession ? "MINE" : <></>}
						</Grid.Column>
						<Grid.Column>
							{this.state.matchData.teams[1].posession ? "MINE" : <></>}
						</Grid.Column>
					</Grid.Row>
				</Grid> 
			);
		}
	}
}
 
export default Home;