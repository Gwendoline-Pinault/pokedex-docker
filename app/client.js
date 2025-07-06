require('dotenv').config();
const mysql = require('mysql2/promise');

const client = mysql.createConnection({
  host: process.env.MYSQL_CONTAINER_HOST || process.env.MYSQL_HOST, // Use the container host if docker, else localhost
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT || 3306, // Default MySQL port
});

module.exports = client;