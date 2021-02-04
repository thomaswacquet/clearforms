import React, { Component } from 'react';
import EditableTitle from "./EditableTitle";
import {  } from '../style/table.css';

export default class TableHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: ['slt', 'slt2' ]
		};

	}

	addRow() {
		this.setState(
			{
				categories: this.state.categories.concat('smt3'),
			}
			);
	}

	render() {
		let i = 0;
		const categories = this.state.categories.map(category => {
			i++;
			return (
				<EditableTitle title={category} key={i}/>
			);
		});

		return (

			<div className="categories">
				{categories}
			</div>

		);
	}
}
