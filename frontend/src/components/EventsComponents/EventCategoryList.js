import React, { useContext, useEffect } from "react";
import { cayegoryContext } from "../../store/category-context";
import EventCategoryCard from "./EventCategoryCard";
import News from "../Home/News";
export default function EventCategoryList() {
    const categoryCtx = useContext(cayegoryContext)
    useEffect(() => {
      categoryCtx.getAllCategories()
    }, [])
    //console.log(categoryCtx.categoriesTab);
    
  return (
    <div>
      <div className="container pt-5 mb-5">
        <div className="row">
          <div className="col section-title">
            <h2>Event</h2>
            <p>Events Categories</p>
          </div>
        </div>
        {/*//!! cards */}
        <div className="row">
            {
                categoryCtx.categoriesTab.map((cat,index)=>{
                    return(
                        <EventCategoryCard key={index} category={cat}></EventCategoryCard>

                    )
                })
            }
         
        </div>
        < News></News>
      </div>
    </div>
  );
}
