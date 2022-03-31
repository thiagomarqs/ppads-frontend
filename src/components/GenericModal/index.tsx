import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { GenericModalProps } from "./GenericModalProps";

class GenericModal extends React.Component<GenericModalProps> {

    render() {
        return (
            <Modal modalClassName={this.props.className} isOpen={this.props.isOpen}>
                <ModalHeader className={this.props.content.header.className}>
                    {this.props.content.header.title}
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </ModalHeader>
                <ModalBody className={this.props.content.body.className}>
                    {this.props.content.body.content}
                </ModalBody>
                <ModalFooter className={this.props.content.footer?.className}>
                    {this.props.content.footer?.content}
                </ModalFooter>
            </Modal>
        )
    }
}

export default GenericModal;