import React from 'react'

function TabTicketItem({items , keys}) {
  return (
    <tr>
                  <td>{items.ticketNumber}</td>
                  <td>{items.ticketPrice}</td>
                  <td>{items.ticketQuantity}</td>
                  <td>{items.CategoryEvent}</td>
                  
                
                  <td className='btn-group gx-3'>
                    <a className="rounded-circle  ms-2 btn btn-outline-warning bg-light fs-5 border-0" type="submit"><i className="bi bi-eye" aria-hidden="true" /></a>
                    <a className="rounded-circle  ms-2 btn btn-outline-success bg-light fs-5 border-0" type="submit"><i className="bi bi-pencil" aria-hidden="true" /></a>
                    <a className="rounded-circle  ms-2 btn btn-outline-danger bg-light  fs-5 border-0" type="submit"><i className="bi bi-trash" aria-hidden="true" /></a>
                  </td>
                </tr>
  )
}

export default TabTicketItem;