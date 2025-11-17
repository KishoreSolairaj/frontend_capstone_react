# StayHealthy - Healthcare Consultation Platform

**StayHealthy Inc.** is a non-profit organization dedicated to improving healthcare facilities in remote areas with minimal or no medical resources. As part of its **Go Digital Initiative**, StayHealthy is building a website to help patients access doctors anytime, anywhere.

This is a comprehensive React-based web application that connects patients with healthcare professionals through instant consultations, appointment booking, and health resources.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [Application Features](#application-features)
- [API Integration](#api-integration)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

StayHealthy is a full-stack healthcare platform that enables:
- Patients to find and book appointments with doctors
- Instant video/chat consultations with medical professionals
- Access to health tips and medical guidance
- User profile management and medical reports
- Review and rating system for doctors

The application consists of:
- **Frontend**: React.js application with responsive UI
- **Backend**: Node.js/Express server with MongoDB database
- **Authentication**: JWT-based secure authentication system

---

## ✨ Features

### For Patients:
1. **User Registration & Login**
   - Secure account creation with email and phone validation
   - JWT token-based authentication
   - Profile management

2. **Doctor Search & Appointments**
   - Search doctors by speciality
   - View doctor profiles with ratings and experience
   - Book appointments with preferred time slots
   - View appointment history

3. **Instant Consultation**
   - Quick access to available doctors
   - Real-time consultation booking
   - Specialty-based doctor filtering

4. **Health Resources**
   - Daily health tips and quotes
   - Health blog with medical guidance
   - Educational content about wellness

5. **Reviews & Feedback**
   - Rate and review doctors
   - Read patient experiences
   - Help others make informed decisions

6. **Profile Management**
   - Update personal information
   - View medical reports
   - Manage appointment history

---

## 🛠️ Technology Stack

### Frontend:
- **React** 18.2.0 - UI framework
- **React Router DOM** 6.14.1 - Navigation and routing
- **Styled Components** 6.0.2 - CSS-in-JS styling
- **AOS (Animate On Scroll)** 2.3.4 - Scroll animations
- **React Slick** - Carousel/slider components
- **Reactjs Popup** - Modal dialogs

### Backend:
- **Node.js** - Runtime environment
- **Express** 4.18.1 - Web framework
- **MongoDB** - Database (via Mongoose 6.5.1)
- **JWT** - Authentication tokens
- **Bcrypt.js** - Password hashing
- **CORS** - Cross-origin resource sharing

### Development Tools:
- **React Scripts** 5.0.1 - Build tools
- **Babel** - JavaScript compiler
- **ESLint** - Code linting

---

## 📦 Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **yarn**
- **MongoDB** (v4.x or higher)
- **Git** (for version control)

To check your versions:
```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/muhammad-awais-web-dev/frontend_capstone_react.git
cd frontend_capstone_react
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

### 4. Configure Environment Variables

The application uses configuration files for API endpoints and database connections.

**Frontend Configuration** (`src/config.js`):
```javascript
export const API_URL = 'http://localhost:8181';
```

**Backend Configuration** (`server/db.js`):
- Update MongoDB connection string with your database credentials
- Default port: 8181

---

## 🏃 Running the Application

### Option 1: Development Mode (Frontend Only)

Start the React development server:

```bash
npm start
```

The application will open at: `http://localhost:3000`

- Hot-reloading enabled
- Development build (not optimized)
- Useful for development and testing

### Option 2: Full Stack (Frontend + Backend)

#### Step 1: Start MongoDB

Ensure MongoDB is running on your system:

```bash
# On macOS with Homebrew
brew services start mongodb-community

# On Linux
sudo systemctl start mongod

# On Windows
net start MongoDB
```

#### Step 2: Start Backend Server

```bash
cd server
npm start
```

The backend server will start at: `http://localhost:8181`

#### Step 3: Start Frontend (in a new terminal)

```bash
npm start
```

The React app will start at: `http://localhost:3000`

### Option 3: Production Build

Build the application for production:

```bash
npm run build
```

This will:
1. Create an optimized production build in the `build` folder
2. Move the build folder to `server/` directory
3. The backend can then serve the static files

To run the production build:

```bash
cd server
npm start
```

Access the application at: `http://localhost:8181`

---

## 📁 Project Structure

```
frontend_capstone_react/
├── public/                          # Static files
│   ├── images/                      # Image assets
│   ├── index.html                   # HTML template
│   ├── manifest.json                # PWA manifest
│   └── Patient_Information.pdf      # Sample medical document
│
├── src/                             # Source code
│   ├── components/                  # React components
│   │   ├── LandingPage/            # Home page components
│   │   │   ├── Components/
│   │   │   │   ├── HeroSection/    # Hero banner
│   │   │   │   ├── Services/       # Services grid
│   │   │   │   ├── Reviews/        # Patient reviews
│   │   │   │   ├── Navbar/         # Navigation bar
│   │   │   │   ├── Footer/         # Footer section
│   │   │   │   └── Layout/         # Page layout wrapper
│   │   │   └── Pages/
│   │   │       └── Home.jsx        # Home page
│   │   │
│   │   ├── Login/                  # Login component
│   │   ├── SignUp/                 # Registration component
│   │   ├── Profile/                # User profile management
│   │   ├── BookAppointments/       # Appointment booking
│   │   │   ├── FindDoctorSearch/   # Doctor search
│   │   │   ├── DoctorCard/         # Doctor profile card
│   │   │   └── AppointmentForm/    # Booking form
│   │   │
│   │   ├── InstantConsultation/    # Instant consultation
│   │   ├── Reports/                # Medical reports
│   │   ├── Reviews/                # Reviews page
│   │   ├── GiveReviews/            # Review submission
│   │   ├── HealthTips/             # Health blog
│   │   └── index.js                # Component exports
│   │
│   ├── api-data/                   # Mock API data (if any)
│   ├── App.js                      # Main App component
│   ├── App.css                     # Global styles
│   ├── index.js                    # Entry point
│   ├── config.js                   # API configuration
│   └── Setauthtoken.js             # Auth token handler
│
├── server/                          # Backend server
│   ├── models/                     # Database models
│   │   └── User.js                 # User schema
│   ├── routes/                     # API routes
│   │   └── auth.js                 # Authentication routes
│   ├── index.js                    # Server entry point
│   ├── db.js                       # Database connection
│   ├── package.json                # Backend dependencies
│   └── vercel.json                 # Vercel deployment config
│
├── package.json                     # Frontend dependencies
├── .gitignore                      # Git ignore rules
├── Dockerfile                      # Docker configuration
├── manifest.yml                    # Cloud Foundry manifest
└── README.md                       # This file
```

---

## 📜 Available Scripts

### Frontend Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (irreversible)
npm run eject
```

### Backend Scripts

```bash
# Start backend server
cd server && npm start
```

---

## ⚙️ Configuration

### API Configuration

Update `src/config.js` to point to your backend server:

```javascript
export const API_URL = 'http://localhost:8181';
// For production:
// export const API_URL = 'https://your-production-url.com';
```

### Database Configuration

Update `server/db.js` with your MongoDB connection string:

```javascript
const mongoURI = "mongodb://localhost:27017";
// Or MongoDB Atlas:
// const mongoURI = "mongodb+srv://username:password@cluster.mongodb.net/database";
```

### Port Configuration

Backend port can be changed in `server/index.js`:

```javascript
const PORT = process.env.PORT || 8181;
```

---

## 🎨 Application Features

### 1. Landing Page
- **Hero Section**: Eye-catching banner with call-to-action
- **Services Grid**: Four main services with navigation
- **Reviews Carousel**: Patient testimonials
- **Dynamic Health Quotes**: Random health tips updated daily

### 2. Authentication System
- **Sign Up**: 
  - Email validation
  - Phone number validation (10 digits)
  - Password strength check (minimum 6 characters)
  - Username validation (minimum 3 characters)
  
- **Login**:
  - Multi-field authentication (username, email, phone, password)
  - JWT token generation
  - Session storage for user data
  - Password visibility toggle

### 3. Doctor Search & Booking
- **Search Functionality**:
  - Filter by medical speciality
  - Location-based search
  - Real-time results
  
- **Doctor Profiles**:
  - Name, speciality, experience
  - Ratings and reviews
  - Availability status
  
- **Appointment Booking**:
  - Date and time selection
  - Consultation type (in-person/online)
  - Appointment confirmation

### 4. Instant Consultation
- Quick access to available doctors
- Specialty-based filtering
- Immediate booking capability
- Similar to appointment booking with instant availability

### 5. User Profile
- View personal information
- Edit profile details:
  - Name
  - Email
  - Phone number
- Update functionality with backend sync
- Session persistence

### 6. Reports & Reviews
- **Medical Reports**: View and download medical documents
- **Review System**:
  - Rate doctors (1-5 stars)
  - Written feedback
  - View all reviews
  - Help other patients

### 7. Health Blog
- Daily health tips
- Wellness guidance
- Medical information
- Preventive care advice

---

## 🔌 API Integration

### External APIs

1. **Doctor Data API**:
   ```
   https://api.npoint.io/e3c6cc64bf013781f538/doctors
   ```
   - Provides doctor information
   - Includes specialities, ratings, experience

### Backend API Endpoints

#### Authentication Routes (`/api/auth`)

1. **Register User**
   ```
   POST /api/auth/signup
   Body: { name, email, phone, password }
   Response: { authtoken, user }
   ```

2. **Login User**
   ```
   POST /api/auth/login
   Body: { name, email, phone, password }
   Response: { authtoken }
   ```

3. **Update Profile**
   ```
   PUT /api/auth/update
   Body: { name, email, phone }
   Response: { success: true }
   ```

### Session Storage

The application uses browser session storage for:
- `auth-token`: JWT authentication token
- `name`: User's name
- `email`: User's email
- `phone`: User's phone number

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. Application won't start

**Error**: `react-scripts: not found`

**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 2. Backend connection error

**Error**: `Failed to fetch` or CORS error

**Solution**:
- Ensure backend server is running on port 8181
- Check `src/config.js` has correct API_URL
- Verify CORS is enabled in `server/index.js`

#### 3. Database connection failed

**Error**: `MongooseError: Connect ECONNREFUSED`

**Solution**:
- Ensure MongoDB is running: `mongod`
- Check connection string in `server/db.js`
- Verify MongoDB port (default: 27017)

#### 4. Port already in use

**Error**: `Port 3000 is already in use`

**Solution**:
```bash
# Kill process on port 3000
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

#### 5. Build fails

**Error**: Build optimization errors

**Solution**:
```bash
# Clear cache and rebuild
npm cache clean --force
rm -rf node_modules build
npm install
npm run build
```

#### 6. Session storage not persisting

**Issue**: User gets logged out on refresh

**Solution**:
- Check browser settings allow session storage
- Ensure session storage is not blocked
- Clear browser cache and cookies

#### 7. Images not loading

**Issue**: Images show broken links

**Solution**:
- Check `public/images/` directory exists
- Verify image paths in components
- Ensure images are accessible via URL

---

## 🔐 Security Notes

- Never commit `.env` files with sensitive data
- Always use environment variables for:
  - Database credentials
  - API keys
  - JWT secrets
- Keep dependencies updated: `npm audit fix`
- Use HTTPS in production
- Implement rate limiting on backend APIs

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

---

## 📄 License

This project is part of a capstone project for educational purposes.

---

## 👥 Support

For issues and questions:
- Create an issue in the GitHub repository
- Contact the development team

---

## 🎉 Acknowledgments

- StayHealthy Inc. for the project initiative
- React community for excellent documentation
- All contributors and testers

---

**Built with ❤️ by StayHealthy Team**
