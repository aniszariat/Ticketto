import React from 'react'

export default function EventCategoryCard({category}) {
  return (
    
  <div className="col-4  gy-0  gap-0">
  <div className=" align-items-center h-100 align-middle center   ">
    <img src={category.CategoryEventBg
} className=" cat1 w-100 h-75 shadow  img-fluid" alt="..." />
    <div className="  bottom-50  text-center center position-relative text-white">
      <p className="mb-3 center fs-4 titre-ev">{category.CategoryEvent}</p> 
    </div>
  </div>
</div>
  )
}
