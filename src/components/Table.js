import React, { Component } from 'react';
import TableBox from './TableBox';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import EditableTitle from './EditableTitle';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Table  as BTable } from 'react-bootstrap';

export default class Table extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rowTitles: ["r1", "r2"],
			colTitles: ["p1", "p2"]
		};
	}

	addCol() {
		this.setState(
			{
				colTitles: this.state.colTitles.concat('smt3'),

			}
		);
	}
	addRow() {
		this.setState(
			{
				rowTitles: this.state.rowTitles.concat('smt3'),
			}
		);
	}
	removeCol(n) {
		let colTitles = this.state.colTitles;
		colTitles.splice(n, 1);
		this.setState(
			{
				colTitles: colTitles
			}
		);
	}
	removeRow(n) {
		let rowTitles = this.state.rowTitles;
		rowTitles.splice(n, 1);
		this.setState(
			{
				rowTitles: rowTitles
			}
		);
	}
	renderHeader() {
		let cols = this.state.colTitles.map((title, idx) => {
			return(
				<EditableTitle title={title} key={idx} onDoubleClick={() => this.removeCol(idx)}/>
			);

		});


		return (
			<thead>
				<tr className="header">
					<td></td>
					{cols}
					<td>
						<Button onClick={() => this.addCol()} variant="light">+</Button>
					</td>
				</tr>
			</thead>
		);
	}

	renderBody() {
		let rows = this.state.rowTitles.map((title, idx) => {
			return (
				<tr>
					<EditableTitle key={idx} title={title} onDoubleClick={() => this.removeRow(idx)} />
					<TableRow colTitles={this.state.colTitles} title={title} key={idx} />
				</tr>
			);
		});

		return (
			<tbody>
				{rows}
				<tr>
					<td>
						<Button onClick={() => this.addRow()} variant="light">+</Button>
					</td>
				</tr>
			</tbody>
		);
	}
	render() {
		return (
			<BTable bordered hover>
				{this.renderHeader()}

			

					
				{this.renderBody()}
					
				
			</BTable>
		);
	}
}
//<input value={this.state.title} onChange={e => this.setState( { title: e.target.value })}/>


