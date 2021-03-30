const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


const db = require("./app/models");
const Role = db.role;
// you may need to drop existing tables and re-sync database. 
// So you can use force: true as code above.
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  db_role_initial();
});
// init 
function db_role_initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "admin"
  })
};

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require('./app/routes/auth.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});