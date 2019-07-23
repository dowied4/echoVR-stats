import React, { Component } from 'react';
import { Grid, Button, Dimmer, Icon, Sidebar, Menu, Header } from 'semantic-ui-react';
import Axios from 'axios';
import StatSidebar from '../Components/StatSidebar';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			matchData: null,
			recording: false,
			visible: true
		 }
		this.getMatch = this.getMatch.bind(this);
	}

	handleHideClick = () => this.setState({ visible: false })
  	handleShowClick = () => this.setState({ visible: true })
  	handleSidebarHide = () => this.setState({ visible: false })

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
		this.interval = setInterval(() => this.getMatch(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		if(!this.state.loading){
			return(
				<Dimmer>
					Loading...
				</Dimmer>
			);
		} else {
			return (
				<Grid centered style={{ height: 'auto' }} >
					<Grid.Row>
						<Grid.Column>
							<StatSidebar/>
						</Grid.Column>
						<Grid.Column width={this.props.width ? this.props.width : 10}>
							<Sidebar.Pushable>
								<Sidebar.Pusher>
									<Grid centered style={{ height: 'auto',marginTop: 50 }} >
										<Grid.Row columns={2}>
											<Grid.Column>
												<h1>HOME</h1>
											</Grid.Column>
											<Grid.Column>
												<h1>TEST</h1>
											</Grid.Column>
										</Grid.Row>
									</Grid>
								</Sidebar.Pusher>
							</Sidebar.Pushable>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			);
		}
	}
}
 
export default Home;