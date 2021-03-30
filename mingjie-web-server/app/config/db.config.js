module.exports = {
  HOST: "localhost",
  USER: "mingjie",
  PASSWORD: "admin",
  DB: "mingjie-website",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
