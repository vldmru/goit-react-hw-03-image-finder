import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {Overlay, ModalWrapp} from './Modal.styled'


const modalRoot = document.querySelector("#modal-root")

export default class Modal extends Component {
  

    componentDidMount() {
        window.addEventListener('keydown', this.onCloseModal)
    }

    componentWillUnmount (){
        window.removeEventListener('keydown', this.onCloseModal)
    }

    onCloseModal = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    onCloseModalOnBackdrop = (e) => {
        if (e.target === e.currentTarget) {
        this.props.onClose();
        }
    };
    
    render() {
        return (
            createPortal(
                <Overlay onClick={this.onCloseModalOnBackdrop}>
                    <ModalWrapp>
                        {this.props.children}
                    </ModalWrapp>
                </Overlay>,
                modalRoot)
        )}
}

Modal.propTypes = {
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.node.isRequired,
}
