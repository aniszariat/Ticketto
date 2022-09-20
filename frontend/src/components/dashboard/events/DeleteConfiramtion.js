import React, { useContext } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { confirmable, createConfirmation } from "react-confirm";
import EventCard from "../../EventsComponents/EventCard";
import { eventContext } from "../../../store/event-context";

const Confirmation = ({
  okLabel = "OK",
  cancelLabel = "Cancel",
  title = "Confirmation",
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
        <Modal.Body>
          <div className="text-dark fw-6">
          {confirmation}

          </div>
          <br></br>
          <br></br>        
          <EventCard
          event={eventToBeDelted}
          ></EventCard>
        
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => proceed(false)}>{cancelLabel}</Button>
          <Button
            className="button-l"
           // bsStyle="primary"
            onClick={() => proceed(true)}
          >
            {okLabel}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Confirmation.propTypes = {
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string,
  confirmation: PropTypes.string,
  show: PropTypes.bool,
  proceed: PropTypes.func, // called when ok button is clicked.
  enableEscape: PropTypes.bool,
  eventToBeDelted: PropTypes.object
};

export function confirm(
  confirmation,
  eventToBeDelted,
  proceedLabel = "OK",
  cancelLabel = "cancel",
  options = {}
) {
 
  return createConfirmation(confirmable(Confirmation))({
    confirmation,
    eventToBeDelted,
    proceedLabel,
    cancelLabel,
    ...options
  });
}
