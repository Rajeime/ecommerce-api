require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    uri: process.env.DB_URI || "mongodb://localhost/users",
  },
  api: {
    key: process.env.API_KEY || "default-api-key",
  },
};
