import React from 'react'
import EventCategoryList from './EventsComponents/EventCategoryList'
import EventHomeList from './EventsComponents/EventHomeList'
import Home from './Home/Home'

export default function Holder() {
  return (
    <div>
        <Home></Home>
        <EventHomeList></EventHomeList>
        <EventCategoryList></EventCategoryList>
    </div>
  )
}
