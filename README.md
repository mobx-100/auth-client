# Authentication-Based Stopwatch Timer

A full-stack MERN application that implements secure user authentication using JWT and provides a protected stopwatch dashboard. Users must register and log in before accessing the stopwatch. The application includes all required stopwatch functionalities along with a Dark/Light Theme Toggle as an additional feature. :contentReference[oaicite:1]{index=1}

---

## Features

### Authentication
- User Registration
- User Login
- JWT-based Authentication
- Password Hashing using bcrypt
- Protected Dashboard
- Secure Logout

### Stopwatch
- Start
- Stop
- Resume
- Reset
- Lap Recording
- Millisecond Precision

### Additional Feature
- 🌙 Dark / Light Theme Toggle

---

## Tech Stack

### Frontend
- React.js
- React Router
- CSS3
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Tokens (JWT)
- bcryptjs

---

## Project Structure

```
Authentication-Stopwatch/
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## Authentication Flow

1. User creates an account.
2. Password is hashed before being stored in MongoDB.
3. User logs in with valid credentials.
4. Server generates a JWT Access Token (and Refresh Token if configured).
5. Protected routes verify the token before granting access.
6. Unauthorized users attempting to access the dashboard are redirected to the login page.
7. Logout removes the authentication token and redirects the user to the landing page.

---

## Stopwatch Features

The protected dashboard includes a stopwatch with:

- Start timer
- Stop timer
- Resume from paused time
- Reset timer
- Record lap times
- Display elapsed time with millisecond precision

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/authentication-stopwatch.git
```

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Authenticate user |
| POST | `/api/auth/logout` | Logout user |
| GET | `/api/auth/profile` | Get authenticated user details |

---

## Protected Route

```
/dashboard
```

Only authenticated users with a valid JWT token can access the stopwatch dashboard.

---

## Screens

- Landing Page
- Sign Up
- Login
- Protected Dashboard
- Stopwatch
- Theme Toggle

---

## Future Improvements

- Remember Me functionality
- Password Reset
- User Profile
- Save Stopwatch History
- Mobile-first enhancements

---

## Author
**Gaurav Gupta**
---

## License

This project is intended for educational purposes.
