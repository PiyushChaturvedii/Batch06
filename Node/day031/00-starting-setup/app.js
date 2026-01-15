const path = require("path");
const mongoose = require("mongoose");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("6960f27f04a259bf1275edba").then((user) => {
    req.user = user;
    next();
  });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

const port = 3000;
mongoose
  .connect(
    "mongodb+srv://admin:1234@cluster0.4duo99k.mongodb.net/shop?appName=Cluster0"
  )
  .then((result) => {
    console.log(`Server is listing on PORT: ${port}`);
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Ram",
          email: "ram@gmail.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(port);
  })
  .catch((err) => console.log(err));
