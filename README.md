# JWT Authentication with Stopwatch

A full-stack authentication application built using the MERN stack that implements secure user authentication with JWT (JSON Web Tokens). After successful login, users can access a protected dashboard containing a fully functional stopwatch with millisecond precision, including Start, Stop, Reset, and Lap features.

---

## Features

### Authentication

- User Registration
- User Login
- Password hashing using bcrypt
- JWT Access Token authentication
- Refresh Token support
- Protected API routes
- Automatic token verification
- Secure logout

---

### Stopwatch Dashboard

Accessible only after successful authentication.

Features include:

- Start
- Stop
- Reset
- Lap recording
- Millisecond precision
- Real-time timer updates

---

## Tech Stack

### Frontend

- React
- React Router
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

---

## Project Structure

```
.
├── backend
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── App.js
│
└── README.md
```

---

## Authentication Flow

1. User signs up with a username, email, and password.
2. Password is securely hashed before storage.
3. User logs in with valid credentials.
4. Server issues:
   - Access Token
   - Refresh Token
5. Protected routes verify the Access Token.
6. When the Access Token expires, a new one can be generated using the Refresh Token.
7. User can securely log out.

---

## Stopwatch Features

- High-resolution timer
- Start and Stop functionality
- Reset timer
- Record unlimited lap times
- Responsive user interface

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/jwt-auth-stopwatch.git
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

ACCESS_TOKEN_SECRET=your_access_secret

REFRESH_TOKEN_SECRET=your_refresh_secret
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/refresh` | Generate new Access Token |
| POST | `/api/auth/logout` | Logout user |

---

## Protected Route

```
/dashboard
```

Only authenticated users with a valid JWT Access Token can access the stopwatch dashboard.

---

## Future Improvements

- Email verification
- Forgot password
- Remember Me functionality
- Profile management
- Persistent stopwatch history
- Dark/Light mode
- Unit testing

---

## Author

**Gaurav Gupta**

B.Tech, Chemical Engineering and Technology  
Indian Institute of Technology (BHU), Varanasi

---

## License

This project is licensed under the MIT License.
