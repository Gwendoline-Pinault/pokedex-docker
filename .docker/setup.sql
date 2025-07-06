-- Create the database
CREATE DATABASE IF NOT EXISTS pokedex;

-- Create the owner user
CREATE USER IF NOT EXISTS 'alex'@'localhost' IDENTIFIED BY 'blaireau';
GRANT ALL PRIVILEGES ON pokedex.* TO 'alex'@'localhost';
FLUSH PRIVILEGES;
