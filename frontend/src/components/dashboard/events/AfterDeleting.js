import React, { useContext } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { confirmable, createConfirmation } from "react-confirm";
import { eventContext } from "../../../store/event-context";

const AfterConfirmation = ({
    okLabel = "OK",
    cancelLabel = "Cancel",
    title = "After Confirmation",
    confirmation,
    show,
    proceed,
    enableEscape = true,
    eventToBeDelted
  }) => {
    return (
      <div className="static-modal">
        <Modal
          animation={false}
          show={show}
          onHide={() => proceed(false)}
          backdrop={enableEscape ? true : "static"}
          keyboard={enableEscape}
        >
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{confirmation}</Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={() => proceed(false)}>{cancelLabel}</Button>
            <Button
              className="button-l"
             // bsStyle="primary"
              onClick={() => proceed(true)}
            >
              {okLabel}
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  };
  
  AfterConfirmation.propTypes = {
    okLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    title: PropTypes.string,
    confirmation: PropTypes.string,
    show: PropTypes.bool,
    proceed: PropTypes.func, // called when ok button is clicked.
    enableEscape: PropTypes.bool,
    eventToBeDelted: PropTypes.object
  };
  
  export function afterDeleting(
    confirmation,
    eventToBeDelted,
    proceedLabel = "OK",
    cancelLabel = "cancel",
    options = {}
  ) {
    // const eventCtx = useContext(eventContext)
    // eventCtx.deleteEventById(eventToBeDelted._id)
       
    return createConfirmation(confirmable(AfterConfirmation))({
      confirmation,
      eventToBeDelted,
      proceedLabel,
      cancelLabel,
      ...options
    });
  }