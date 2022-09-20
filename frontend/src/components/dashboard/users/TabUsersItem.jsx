import moment from 'moment'
import React from 'react'

function TabUsersItem({items, keys}) {
  return (
    <tr key={keys}>
    <td>{items._id}</td>
    <td>{items.FirstName}</td>
    <td>{items.LastName}</td>
    <td>{moment(items.Birthdate).format("DD-MM-YYYY")}</td>
    <td>{items.Email}</td>
    <td>
      <a
        className="rounded-circle  ms-2 btn btn-outline-warning bg-light fs-5 border-0"
        type="submit"
      >
        <i className="bi bi-eye" aria-hidden="true" />
      </a>
      <a
        className="rounded-circle  ms-2 btn btn-outline-success bg-light fs-5 border-0"
        type="submit"
      >
        <i className="bi bi-pencil" aria-hidden="true" />
      </a>
      <a
        className="rounded-circle  ms-2 btn btn-outline-danger bg-light  fs-5 border-0"
        type="submit"
      >
        <i className="bi bi-trash" aria-hidden="true" />
      </a>
    </td>
  </tr>
  )
}

export default TabUsersItem