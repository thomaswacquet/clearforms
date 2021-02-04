import React, { Component } from 'react';
import EditableTitle from './EditableTitle';
import Separator from './Separator';
import TableBox from './TableBox';
import TableHeader from './TableHeader';

export default class TableRow extends Component {
	constructor(props) {
		super(props);
    }
    
	render() {

        const boxes = this.props.colTitles.map((title, idx) => {

            return (
                <TableBox key={idx}/>
            );
        });

		return (
            <>
                {boxes}
            </>
		);
	}
}