CREATE DATABASE IF NOT EXISTS loginandregist;
USE loginandregist;


CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) NOT NULL,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    emailAdress VARCHAR(255) NOT NULL
    

);
CREATE TABLE IF NOT EXISTS job (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) NOT NULL,
    jobTitle VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL
    
);
-- Insert sample user data (optional)
INSERT INTO users (userName, password, firstName, lastName, emailAdress) VALUES
('kun', '123', 'Kun', 'Dániel','kundaniel2005@gmail.com');