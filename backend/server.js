const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const eventsRoutes = require("./routes/events");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const ticketsRoutes = require("./routes/ticket");
const bookingTicketsRoutes = require("./routes/booking");
const commentRoutes = require("./routes/comment");
const categoryTicketRoutes = require("./routes/categoryTicket");
const newsRoutes = require("./routes/news");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, userId"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
/* app.use('/',(req, res )=> {
    try {
        res.send('hello visitor !' )      
    } catch (error) {
        res.status(500).json(error)
    }
}); */

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/events", eventsRoutes);
app.use("/user", userRoutes);
app.use("/category", categoryRoutes);
app.use("/ticket", ticketsRoutes);
app.use("/booking", bookingTicketsRoutes);
app.use("/comment", commentRoutes);
app.use("/categoryT", categoryTicketRoutes);
app.use("/news", newsRoutes);

mongoose.connect(
  "mongodb+srv://admin:1234@cluster0.anjoqsr.mongodb.net/Ticketto?retryWrites=true&w=majority",
  (err, done) => {
    if (err) {
      console.log(err, "erreur de connexion avec la BD");
    }
    if (done) {
      console.log("BD connected !");
    }
  }
);

app.listen(4000, () =>
  console.log("serveur fonctionne trés bien au port 4000")
);
