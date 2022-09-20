import React from "react";
import { PanierItem } from "./PanierItem";

export default function Panier() {
  return (
    <div className="table-responsive container table-hover justify-content-center mt-5  align-content-center align-middle  ">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="border-0 bg-light">
              <div className="p-2 px-3 text-capitalize text-center">
                Ticket Category
              </div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-capitalize text-center">
                Ticket Reference
              </div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-capitalize text-center">Price</div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-capitalize text-center">Quantity</div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-capitalize">Remove</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <PanierItem></PanierItem>
        </tbody>
      </table>
    </div>
  );
}
