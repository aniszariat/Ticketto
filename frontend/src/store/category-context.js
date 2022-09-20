import React, { createContext, useState } from 'react'

export const cayegoryContext = createContext({
    categoriesTab:[],
    getAllCategories:()=>{}
})

function CategoryContextProvider(props) {
    const [catTab, setCatTab] = useState([])
    function getAllCategories() {
        fetch('/category',{
            method:"GET",
            headers: { "Content-Type": "application/json" },    
        }).then((res) => res.json())
         .then((data) => setCatTab(data));
    }
    const context = {
        categoriesTab : catTab,
        getAllCategories:getAllCategories
    }
  return (<cayegoryContext.Provider value={context}>
    {props.children}
  </cayegoryContext.Provider>
  )
}

export default CategoryContextProvider