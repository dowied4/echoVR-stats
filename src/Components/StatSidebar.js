import React, { Component } from 'react';
import {Sidebar, Menu, Icon} from 'semantic-ui-react'
import { Link } from "react-router-dom";

class StatSidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return ( 
			<Sidebar as={Menu}
				animation='push'
				icon='labeled'
				inverted
				vertical
				visible
				width='thin' >
				<Menu
					borderless
					compact
					fluid
					inverted
					vertical
					style={{ height: '100%', borderRadius: '0px' }}
				>
					<Menu.Item as={Link} to="/" style={{marginTop: 50}}>
						<Icon name='home' />
						Home
					</Menu.Item>
					<Menu.Item as={Link} to="/Roster/1234" style={{marginTop: 50}}>
						<Icon name='group'/> Roster
					</Menu.Item>
				</Menu>
			</Sidebar>
		 );
	}
}
 
export default StatSidebar;