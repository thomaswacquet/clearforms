import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from 'react-bootstrap/Container';
import { FormControl } from "react-bootstrap";

export default class TableBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            itemIdxEdited: null
        };
    }
    addItem() {
        this.setState(prev => {
            return {
                items: prev.items.concat("i")
            }
        });
    }
    editItem(idx) {
        this.setState({
            itemIdxEdited: idx
        }
        );
    }
    render() {
        const items = this.state.items.map((item, idx) => {

            return <ListGroup.Item onDoubleClick={() => this.editItem(idx)}><FormControl value={item}/></ListGroup.Item>;
        });
        return (
            <td>
                {items}
                <ListGroup.Item variant="secondary" action onClick={() => this.addItem()}>+</ListGroup.Item>
            </td>
        );
    }
}