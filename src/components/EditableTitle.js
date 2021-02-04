import '../App.css';
import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const renderTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
	  Double click to remove
	</Tooltip>
);

export default class EditableTitle extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: this.props.title
		};
	}
	render() {
		return (
			<OverlayTrigger
				placement="bottom"

				overlay={renderTooltip}
		  >
			<th className="table-box editable-title" onDoubleClick={() => this.props.onDoubleClick()}>
				<Form.Control type="text" />
			</th>
			</OverlayTrigger>
		);
	}
}
