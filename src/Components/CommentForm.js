import React, { Component } from 'react';
import { Navbar, Jumbotron, NavItem, Nav, Button, Modal, ModalHeader, ModalBody, Label, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class FormModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        }

    }
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    //   Nut BUTTON
    handleLogin = (e) => {
        e.preventDefault();
        this.toggleModal();
        alert("Ratting: " + this.username.value + 'Name: ' + this.password.value)
    }
    render() {
        return (
            <React.Fragment>
                <Nav className="m-auto" navbar>
                    <NavItem>
                        <Button outline onClick={() => this.toggleModal()}>
                            <span className="fa fa-pencil fa-lg"></span> Submit Comment
                        </Button>
                    </NavItem>
                </Nav>
                <Modal isOpen={this.state.isModalOpen} toggle={() => this.toggleModal()}>
                    <ModalHeader>Submit Comments</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(e) => this.handleLogin(e)}>
                            <Row className="form-group">
                                <Label htmlFor="username">Ratting</Label>
                                <Control.select id="username" name="username"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name">Your Name</Label>
                                <Control.text model=".name" id="name" name="name" placeholder="Your name"
                                    className="form-control"
                                />


                            </Row>
                            <Row className="form-group">
                                <Label>Comments: </Label>
                                <Control.textarea name="remember" />
                            </Row>
                            <Button type='submit' value='submit' color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
export default FormModal;