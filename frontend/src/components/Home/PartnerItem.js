import React from 'react'

function PartnerItem(partner) {
  return (
    <div className="col-lg-2 col-md-4 col-6">
    <img
      src={partner}
      className="img-fluid"
      alt='partner'
    />
  </div>
  )
}

export default PartnerItem