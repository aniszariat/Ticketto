import ticketImg from "../../../../assets/img/hd-tickets-49035.png";

export function PanierItem() {
  return (
    <tr>
      <th scope="row" className="border-0">
        <div>
          <img
            src={ticketImg}
            alt="ticket image"
            width={70}
            className="img-fluid rounded shadow-sm"
          />
          <div className="ml-3 d-inline-block align-middle">
            <h5 className="mb-0">
              {" "}
              <a href="#" className="text-dark d-inline-block align-middle">
                Shaun Lee Moon
              </a>
            </h5>
            <span className="text-muted font-weight-normal font-italic d-block">
              Category: Normal Pack
            </span>
          </div>
        </div>
      </th>
      <td className="border-0 align-middle text-center">AV08956</td>
      <td className="border-0 align-middle text-center">
        {" "}
        <i className="fa fa-euro" aria-hidden="true" /> 15.00
      </td>
      <td className="border-0 align-middle text-center">3</td>
      <td className="border-0 align-middle text-center">
        <a href="#" className="text-dark bg-light rounded-circle p-3">
          <i className="fa fa-trash " />
        </a>
      </td>
    </tr>
  );
}
