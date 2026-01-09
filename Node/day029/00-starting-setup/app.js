const path = require("path");
const mongoose = require("mongoose");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
// const mongoConnect = require("./util/database").mongoConnect;
// const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   User.findById("694a752001aa70343c4c5855")
//     .then((user) => {
//       if (!user) {
//         const newUser = new User("Default User", "default@example.com");
//         return newUser.save().then((result) => {
//           // result may have insertedId for MongoDB; attach minimal user object
//           const insertedId =
//             result && result.insertedId ? result.insertedId : null;
//           req.user = {
//             _id: insertedId,
//             name: newUser.name,
//             email: newUser.email,
//           };
//           next();
//         });
//       }
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch((err) => console.log(err));
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// mongoConnect(() => {
//   const PORT = process.env.PORT || 3000;
//   const server = app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
//   });
//   server.on("error", (err) => {
//     if (err && err.code === "EADDRINUSE") {
//       console.error(
//         `Port ${PORT} is already in use. Choose a different port or stop the other process.`
//       );
//     } else {
//       console.error(err);
//     }
//   });
// });
const port = 3000;
mongoose
  .connect(
    "mongodb+srv://admin:1234@cluster0.4duo99k.mongodb.net/shop?appName=Cluster0"
  )
  .then((result) => {
    console.log(`Server is listing on PORT: ${port}`);
    app.listen(port);
  })
  .catch((err) => console.log(err));
