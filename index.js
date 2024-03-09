const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to SecureVault! Our digital security solution provides end-to-end encryption for your sensitive documents and communications, and is designed for individuals and businesses that prioritize privacy and security without compromising on usability.');
});

// Define route for the login page
app.get('/login', (req, res) => {
  res.send('Please enter your username and password to access your SecureVault account.');
});

// Define route for the signup page
app.get('/signup', (req, res) => {
  res.send('Create a new SecureVault account to start protecting your sensitive documents and communications with end-to-end encryption.');
});

// Define route for the dashboard page
app.get('/dashboard', (req, res) => {
  res.send('Access your SecureVault dashboard to manage your encrypted documents and communications, and configure your security settings.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});