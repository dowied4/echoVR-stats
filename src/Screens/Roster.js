import React, { Component } from 'react';
import StatSidebar from '../Components/StatSidebar'
import { Grid, Header, Sidebar } from 'semantic-ui-react'

class Roster extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}

	componentDidMount(){
		console.log(this.props.match.params)
	}
	render() { 
		return ( 
		<Grid centered style={{ height: 'auto' }} >
			<Grid.Row>
				<Grid.Column>
					<StatSidebar/>
				</Grid.Column>
				<Grid.Column width={this.props.width ? this.props.width : 10}>
					<Sidebar.Pushable>
						<Sidebar.Pusher>
							<Header>{this.props.match.params.id}</Header>
						</Sidebar.Pusher>
					</Sidebar.Pushable>
				</Grid.Column>
			</Grid.Row>
		</Grid>
		 );
	}
}
 
export default Roster;