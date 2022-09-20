import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import EventContextProvider from "./store/event-context";
import CategoryContextProvider from "./store/category-context";
import UserContextProvider from "./store/user-context";
import BookingContextProvider from "./store/booking-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <BookingContextProvider>
        <CategoryContextProvider>
          <EventContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </EventContextProvider>
        </CategoryContextProvider>
      </BookingContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
