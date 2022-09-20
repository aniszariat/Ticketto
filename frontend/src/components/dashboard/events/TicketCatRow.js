import React, { useRef, useState, useEffect, useContext } from "react";
import { eventContext } from "../../../store/event-context";

export default function TicketCatRow({
  pack,
  submitTicketHandler,
  disabledcomp,
  update,
}) {
  console.log("pack", pack);
  const eventCtx = useContext(eventContext);
  const { singleEvent } = eventCtx;
  const categoryTicket = update
    ? singleEvent?.EventTickets.find(
        (el) => el.Category === pack.split(" : ")[1]
      )
    : "";
  const [price, setPrice] = useState(update ? categoryTicket?.Price : "");
  const [quantity, setQuantity] = useState(
    update ? categoryTicket?.Quantity : ""
  );
  const [validationChecked, setValidationChecked] = useState(false);
  const validationDisabled = !Number(quantity) || !Number(price);
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleChangeQuantity = (e) => {
    setQuantity(Math.round(e.target.value));
  };

  useEffect(() => {
    submitTicketHandler(
      pack.split(" : ")[1],
      quantity,
      price,
      validationChecked
    );
  }, [validationChecked]);

  return (
    <tr>
      <td>{pack.split(" : ")[1]}</td>
      <td>
        <input
          type="number"
          min="1"
          className="form-control"
          id="validationCustomUsername"
          aria-describedby="inputGroupPrepend"
          placeholder="?"
          required
          disabled={validationChecked}
          value={quantity}
          onChange={handleChangeQuantity}
          step="1"
        />
      </td>
      <td>
        <input
          type="number"
          min="1"
          className="form-control"
          id="validationCustomUsername"
          aria-describedby="inputGroupPrepend"
          placeholder="?"
          required
          onChange={handleChangePrice}
          value={price}
          disabled={validationChecked}
        />
      </td>
      <td style={{ backgroundColor: validationDisabled ? "black" : null }}>
        <div className="form-check form-switch d-flex justify-content-center">
          <input
            style={{
              position: "absolute",
              transform: "translateY(50%)",
            }}
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            disabled={validationDisabled}
            checked={validationChecked}
            onChange={(e) => setValidationChecked(e.target.checked)}
          />
        </div>
      </td>
    </tr>
  );
}
