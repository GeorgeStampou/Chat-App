# Chat-App
This Chat Application is a real-time messaging service that allows users to join chat room, send messages, and see online users' status. It's built using Node.js, Express, and Socket.io for real-time communication.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Features
- **Real-time Messaging**: Users can send and receive messages in real-time.
- **User Status**: Users can see who is online or offline in the chat.
- **ChatBot Notifications**: A ChatBot notifies the chat room when a user joins or leaves.

## Prerequisites
- Node.js

## Installation

To use the Chat-App, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/GeorgeStampou/Chat-App.git

2. Open the project directory:
   
   ```bash
   cd Chat-App-main
3. Install the project dependencies:

   ```bash
   npm install
4. Create a `.env` file in the project root and add your environment variables, e.g.:
   ```env
   PORT = some port number (like 3000 or 5000)

## Usage

1. Start the server:
   ```bash
   node app.js
2. The app will be available at `http://localhost:whatever port you add at the .env file` when you see a message at your command window like: `Server is listening on port port_number...`
3. You can now interact with the app.
4. Enter a username and join the chat room.
5. Start sending and receiving messages in real-time.
6. Observe the user status and ChatBot notifications.
