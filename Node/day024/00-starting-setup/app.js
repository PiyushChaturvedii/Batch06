const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
// const db = require("./util/database");
// const sequelize = require("./util/database");
const mongoConnect = require("./util/database").mongoConnect;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");
// const Product = require("./models/product");
// const User = require("./models/user");
// const Cart = require("./models/cart");
// const Order = require("./models/order");
// const CartItem = require("./models/cart-item");
// const OrderItem = require("./models/order-item");

// db.execute("SELECT * FROM products")
//   .then((result) => console.log(result[0]))
//   .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  // User.findByPk(1)
  //   .then((user) => {
  //     req.user = user;
  //     next();
  //   })
  //   .catch((err) => console.log(err));
  next();
});

app.use("/admin", adminRoutes);
// app.use(shopRoutes);
app.use(errorController.get404);

// Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });
// Order.belongsTo(User);
// User.hasMany(Order);
// Order.belongsToMany(Product, { through: OrderItem });

// sequelize
//   // .sync({ force: true })
//   .sync()
//   .then(() => {
//     return User.findByPk(1);
//     // console.log(result);
//   })
//   .then((user) => {
//     if (!user) {
//       return User.create({ name: "Ram", email: "ram@gmail.com" });
//     }
//     return user;
//   })
//   .then((user) => {
//     // console.log(user);
//     return user.createCart();
//   })
//   .then((cart) => {
//     app.listen(3000);
//   })
//   .catch((err) => console.log(err));

mongoConnect((client) => {
  // console.log(client);
  app.listen(3000);
});
