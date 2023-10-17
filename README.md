iNotes

iNotes is a feature-rich notes-taking app designed to streamline your digital note-keeping experience. Developed as part of the Internet Programming Lab Project for Semester 5 by Anas Khan, iNotes offers a robust solution for storing and accessing your notes and important information in a cloud-based database storage system. The sleek and minimalist design is inspired by Apple, offering a user-friendly interface that's both elegant and intuitive.

## Project Overview

iNotes is built using a variety of technologies to ensure a seamless and secure experience for its users. Here's an overview of the key components:

- **Frontend Design:** We've used React for the frontend design to deliver a clean and modern user interface, taking inspiration from Apple's minimalist design philosophy.
  
- **Authentication:** iNotes ensures the security of your notes with JWT-based authentication, and local storage is implemented to minimize the need for repeated logins.
  
- **Backend:** The backend is powered by Node.js and Express.js, with MongoDB serving as the database for storing, updating, and deleting your notes.
  

## Quick Start

Get started with iNotes by following these simple steps:

1. Clone the repository and navigate to the project directory in your terminal:
  
  ```bash
  $ git clone https://github.com/anxkhn/inotes.git
  $ cd inotes
  ```
  
2. Install dependencies for the backend:
  
  ```bash
  $ cd backend
  $ npm install
  ```
  
3. Install dependencies for the frontend:
  
  ```bash
  $ cd frontend
  $ npm install
  ```
  
4. Create a `.env` file in the backend directory and add the following configuration:
  
  ```
  PORT = 5000
  DATABASE = mongodb://127.0.0.1:27017  # Use this if you're running MongoDB locally
  TOKEN_SECRET = <Your Token Secret>
  ```
  
  Ensure that you replace `<Your Token Secret>` with your specific configurations.
  
5. **Connect Your MongoDB:**
  If you are using a local MongoDB database, as specified in the `.env` file, ensure that MongoDB is running on `127.0.0.1` (localhost) at port `27017`.
  
6. **Run Frontend and Backend Concurrently:**
  
  To run the backend, use the following commands:
  
  ```bash
  $ cd backend/
  $ npm run dev
  ```
  
  To run the frontend, use the following commands:
  
  ```bash
  $ cd frontend/
  $ npm start
  ```
  

Now you're all set to start using iNotes. Enjoy keeping your notes organized and accessible in style, with a design inspired by Apple's elegance and simplicity.