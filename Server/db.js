const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "15122001",
  host: "localhost",
  port: 5432,
  database: "loginform",
});

module.exports = pool;
