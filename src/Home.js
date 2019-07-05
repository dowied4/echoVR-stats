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
			const res = JSON.parse(result.data.replace(/\0.*$/g,''));
			if(res.game_status === "playing") {
				this.setState({
					loading: false,
					matchData: res
				})
			}
		})
		.catch((err) => {console.log(err)});
	}
	componentDidMount() {
		this.interval = setInterval(() => this.getMatch(), 500);
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
				<Grid className="main-page" textAlign={'center'} verticalAlign={'middle'} padded={true}>
					<Grid.Row columns={2}>
						<Grid.Column>
							<Header>{this.state.matchData.teams[0].team}</Header>
						</Grid.Column>
						<Grid.Column>
							<Header>{this.state.matchData.teams[1].team}</Header>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={2}>
						<Grid.Column>
							<Grid textAlign={'center'} verticalAlign={'middle'} padded={true}>
								{this.state.matchData.teams[0].players.map( player => {
									return (
										<Grid.Row columns={2}>
											<Grid.Column>
												<Header>{player.name}</Header>
											</Grid.Column>
											<Grid.Column>
												{player.possession ? <Icon color="green" name="check circle"/>:<></>}
											</Grid.Column>
										</Grid.Row>
									);
								} )}
							</Grid>
						</Grid.Column>
						<Grid.Column>
							<Grid textAlign={'center'} verticalAlign={'middle'} padded={true}>
								{this.state.matchData.teams[1].players.map( player => {
									return (
										<Grid.Row columns={2}>
											<Grid.Column>
												<Header>{player.name}</Header>
											</Grid.Column>
											<Grid.Column>
												{player.possession ? <Icon color="green" name="check circle"/>:<></>}
											</Grid.Column>
										</Grid.Row>
									);
								} )}
							</Grid>
						</Grid.Column>
					</Grid.Row>
				</Grid> 
			);
		}
	}
}
 
export default Home;