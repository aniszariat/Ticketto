import { Route, Routes } from "react-router-dom";
import NewPost from "./components/dashboard/blog/NewPost";
import Posts from "./components/dashboard/blog/Posts";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import AddEvents from "./components/dashboard/events/AddEvents";
import EventList from "./components/dashboard/events/EventList";
import { EventTicketsChart } from "./components/dashboard/events/eventTicketsChart";
import LayoutDashboard from "./components/dashboard/LayoutDashboard";
import Settings from "./components/dashboard/profil/Settings";
import AddTickets from "./components/dashboard/tickets/AddTickets";
import ListTickets from "./components/dashboard/tickets/ListTickets";
import UsersList from "./components/dashboard/users/UsersList";
import AllEvents from "./components/EventsComponents/AllEvents";
import BookingOrder from "./components/EventsComponents/EventBooking/BookingOrder/BookingOrder.js";
import EventBooking from "./components/EventsComponents/EventBooking/EventBooking";
import EventDetail from "./components/EventsComponents/EventDetails/EventDetail.jsx";
import Holder from "./components/Holder";
import AboutUs from "./components/Home/AboutUs";
import Contact from "./components/Home/Contact";
import News from "./components/Home/News";
import Layout from "./components/Layout";
import Login from "./components/Login-signup/Login";
import SignUp from "./components/Login-signup/SignUp";

function App() {
  localStorage.setItem("admin", "631f7cce3975e81161aab776");
  return (
    <div className="App">
      <Routes>
        <Route element={<LayoutDashboard />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route element={<AddEvents />} path="/addEvent" />
          <Route element={<EventList />} path="/listEvent" />
          <Route element={<AddTickets />} path="/addTicket" />
          <Route element={<ListTickets />} path="/listTicket" />
          <Route element={<Posts />} path="/blog" />
          <Route element={<NewPost />} path="/addPost" />
          <Route element={<Settings />} path="/profilSettings" />
          <Route element={<UsersList />} path="/user" />
          <Route
            path="/reports"
            element={<EventTicketsChart></EventTicketsChart>}
          ></Route>
          <Route path="/eventEditDetails/:id" element={<AddEvents update />} />
        </Route>
        <Route element={<Layout />}>
          <Route
            path="/eventDetails/:id"
            element={<EventDetail></EventDetail>}
          />
          <Route path="/eventBooking/:id" element={<EventBooking />} />
          <Route
            path="/eventBooking/:id/bookingOrder"
            element={<BookingOrder></BookingOrder>}
          ></Route>
          <Route path="/" element={<Holder></Holder>}></Route>
          <Route path="/events" element={<AllEvents></AllEvents>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/news" element={<News></News>}></Route>
          <Route path="/contactUs" element={<Contact></Contact>}></Route>
          <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
