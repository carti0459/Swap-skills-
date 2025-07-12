# Skill Swap Platform

## Problem Statement 1: Skill Swap Platform

**Overview:**
Develop a Skill Swap Platform – a mini application that enables users to list their skills and request others in return.

**Features:**
* **Basic Info:** Name, location (optional), profile photo (optional).
* List of skills offered.
* List of skills wanted.
* Availability (e.g., weekends, evenings).
* User can make their profile public or private.
* Users can browse or search others by skill (e.g., "Photoshop" or "Excel").

**Request & Accept Swaps:**
* Accept or reject swap offers[cite: 21].
* Show current and pending swap requests[cite: 25].
* Ratings or feedback after a swap[cite: 26].
* The user is also able to delete the swap request if it is not accepted[cite: 27].

**Admin Role:**
* Reject inappropriate or spammy skill descriptions[cite: 29].
* Ban users who violate platform policies[cite: 29].
* Monitor pending, accepted, or cancelled swaps[cite: 30].
* Send platform-wide messages (e.g., feature updates, downtime alerts)[cite: 31].
* Download reports of user activity, feedback logs, and swap stats[cite: 31].

## Team Members:

* **Team Member 1:** Mudit Agarwal - muditagarwal2022@vitbhopal.ac.in
* **Team Member 2:** Karthik Nair - internplacecarti@gmail.com
* **Team Member 3:** Rahul Sharma - rahulsharma2022@vitbhopal.ac.in
* **Team Member 4:** Rushikesh Chaudhari - rushikeshc2003@gmail.com

diff --git a/README.md b/README.md
--- a/README.md
+++ b/README.md

-# Skill Swap Platform
-
-## Problem Statement 1: Skill Swap Platform
-
-**Overview:**
-Develop a Skill Swap Platform – a mini application that enables users to list their skills and request others in return.
-
-**Features:**
-* **Basic Info:** Name, location (optional), profile photo (optional).
-* List of skills offered.
-* List of skills wanted.
-* Availability (e.g., weekends, evenings).
-* User can make their profile public or private.
-* Users can browse or search others by skill (e.g., "Photoshop" or "Excel").
-
-**Request & Accept Swaps:**
-* Accept or reject swap offers[cite: 21].
-* Show current and pending swap requests[cite: 25].
-* Ratings or feedback after a swap[cite: 26].
-* The user is also able to delete the swap request if it is not accepted[cite: 27].
-
-**Admin Role:**
-* Reject inappropriate or spammy skill descriptions[cite: 29].
-* Ban users who violate platform policies[cite: 29].
-* Monitor pending, accepted, or cancelled swaps[cite: 30].
-* Send platform-wide messages (e.g., feature updates, downtime alerts)[cite: 31].
-* Download reports of user activity, feedback logs, and swap stats[cite: 31].
-
-## Team Members:
-
-* **Team Member 1:** Mudit Agarwal - muditagarwal2022@vitbhopal.ac.in
-* **Team Member 2:** Karthik Nair - internplacecarti@gmail.com
-* **Team Member 3:** Rahul Sharma - rahulsharma2022@vitbhopal.ac.in
-* **Team Member 4:** Rushikesh Chaudhari - rushikeshc2003@gmail.com
+# 🔄 Skill Swap Platform (DevTinder)
+
+A comprehensive skill exchange platform that enables users to list their skills and request others in return. Built with modern web technologies including React, Node.js, and MongoDB.
+
+## 🎯 Project Overview
+
+The Skill Swap Platform is a full-stack web application that connects people who want to exchange skills. Users can create profiles, list their skills, browse other users' skills, and create swap requests to exchange knowledge and expertise.
+
+## 🏗️ Architecture
+
+This project follows a modern full-stack architecture:
+
+### Frontend (`devTinder-web-Frontend-main/`)
+- **Framework**: React 19.1.0 with Vite
+- **State Management**: Redux Toolkit
+- **Styling**: Tailwind CSS + DaisyUI
+- **HTTP Client**: Axios
+- **Routing**: React Router DOM
+
+### Backend (`devTinder-main/`)
+- **Runtime**: Node.js
+- **Framework**: Express.js
+- **Database**: MongoDB with Mongoose ODM
+- **Authentication**: JWT + bcrypt
+- **Additional**: CORS, cookie-parser, validator
+
+## ✨ Features
+
+### User Features
+- **Profile Management**: Create and edit user profiles with basic info, skills, and availability
+- **Skill Listings**: List skills offered and skills wanted
+- **Profile Visibility**: Make profiles public or private
+- **Skill Search**: Browse and search users by specific skills
+- **Swap Requests**: Send, accept, or reject skill swap requests
+- **Ratings & Feedback**: Rate and provide feedback after skill swaps
+- **Connection Management**: View current and pending swap requests
+
+### Admin Features
+- **Content Moderation**: Reject inappropriate or spammy skill descriptions
+- **User Management**: Ban users who violate platform policies
+- **Swap Monitoring**: Monitor pending, accepted, or cancelled swaps
+- **Platform Communication**: Send platform-wide messages
+- **Analytics**: Download reports of user activity, feedback logs, and swap stats
+
+## 📁 Project Structure
+
+```
+📦 Skill Swap Platform
+├── 📁 devTinder-main/ (Backend)
+│   ├── 📁 src/
+│   │   ├── 📄 app.js (Main server file)
+│   │   ├── 📁 models/
+│   │   │   ├── 📄 user.js (User model)
+│   │   │   └── 📄 connectionRequest.js (Connection request model)
+│   │   ├── 📁 routes/
+│   │   │   ├── 📄 auth.js (Authentication routes)
+│   │   │   ├── 📄 profile.js (Profile routes)
+│   │   │   ├── 📄 request.js (Request routes)
+│   │   │   ├── 📄 userroute.js (User routes)
+│   │   │   └── 📄 admin.js (Admin routes)
+│   │   ├── 📁 middlewares/ (Custom middleware)
+│   │   └── 📁 utils/ (Utility functions)
+│   ├── 📄 package.json
+│   └── 📄 .gitignore
+├── 📁 devTinder-web-Frontend-main/ (Frontend)
+│   ├── 📁 src/
+│   │   ├── 📄 App.jsx (Main app component)
+│   │   ├── 📄 main.jsx (Entry point)
+│   │   ├── 📁 components/
+│   │   │   ├── 📄 Login.jsx (Login/Register)
+│   │   │   ├── 📄 NavBar.jsx (Navigation)
+│   │   │   ├── 📄 Feed.jsx (Main feed)
+│   │   │   ├── 📄 Profile.jsx (User profile)
+│   │   │   ├── 📄 EditProfile.jsx (Profile editing)
+│   │   │   ├── 📄 Connections.jsx (User connections)
+│   │   │   ├── 📄 Requests.jsx (Swap requests)
+│   │   │   ├── 📄 UserCard.jsx (User card component)
+│   │   │   ├── 📄 AdminPanel.jsx (Admin dashboard)
+│   │   │   └── 📄 Footer.jsx (Footer component)
+│   │   └── 📁 utils/ (Utility functions)
+│   ├── 📄 package.json
+│   ├── 📄 vite.config.js
+│   ├── 📄 tailwind.config.js
+│   └── 📄 index.html
+└── 📄 README.md
+```
+
+## 🚀 Installation & Setup
+
+### Prerequisites
+- Node.js (v16 or higher)
+- MongoDB (local or cloud instance)
+- npm or yarn
+
+### Backend Setup
+
+1. **Navigate to backend directory**
+   ```bash
+   cd devTinder-main
+   ```
+
+2. **Install dependencies**
+   ```bash
+   npm install
+   ```
+
+3. **Environment Configuration**
+   Create a `.env` file in the backend root:
+   ```env
+   PORT=3000
+   MONGODB_URI=your_mongodb_connection_string
+   JWT_SECRET=your_jwt_secret_key
+   ```
+
+4. **Start the server**
+   ```bash
+   # Development mode
+   npm run dev
+   
+   # Production mode
+   npm start
+   ```
+
+### Frontend Setup
+
+1. **Navigate to frontend directory**
+   ```bash
+   cd devTinder-web-Frontend-main
+   ```
+
+2. **Install dependencies**
+   ```bash
+   npm install
+   ```
+
+3. **Start the development server**
+   ```bash
+   npm run dev
+   ```
+
+4. **Build for production**
+   ```bash
+   npm run build
+   ```
+
+## 🔌 API Endpoints
+
+### Authentication Routes (`/auth`)
+- `POST /auth/signup` - Register new user
+- `POST /auth/login` - User login
+- `POST /auth/logout` - User logout
+
+### Profile Routes (`/profile`)
+- `GET /profile/view` - View user profile
+- `PATCH /profile/edit` - Edit user profile
+
+### Request Routes (`/request`)
+- `POST /request/send/:status/:toUserId` - Send connection request
+- `POST /request/review/:status/:requestId` - Accept/reject request
+
+### User Routes (`/user`)
+- `GET /user/requests/received` - Get received requests
+- `GET /user/connections` - Get user connections
+- `GET /user/feed` - Get user feed
+
+### Admin Routes (`/admin`)
+- `GET /admin/pendingRequests` - Get pending requests
+- `DELETE /admin/users/:userId` - Delete user
+- `POST /admin/broadcast` - Send broadcast message
+
+## 🎮 Usage Guide
+
+### For Users
+
+1. **Sign Up/Login**: Create an account or log in
+2. **Complete Profile**: Add your skills, location, and availability
+3. **Browse Skills**: Search for users offering skills you want to learn
+4. **Send Requests**: Request skill swaps with other users
+5. **Manage Connections**: Accept/reject incoming requests
+6. **Rate & Feedback**: Provide feedback after successful swaps
+
+### For Admins
+
+1. **Access Admin Panel**: Login with admin credentials
+2. **Monitor Activity**: View all user activities and swap requests
+3. **Moderate Content**: Review and moderate user-generated content
+4. **Manage Users**: Ban or manage problematic users
+5. **Analytics**: View platform statistics and download reports
+
+## 🛠️ Technologies Used
+
+### Frontend
+- **React 19.1.0** - Modern UI library
+- **Vite** - Fast build tool and dev server
+- **Redux Toolkit** - State management
+- **React Router DOM** - Client-side routing
+- **Tailwind CSS** - Utility-first CSS framework
+- **DaisyUI** - Tailwind CSS components
+- **Axios** - HTTP client
+
+### Backend
+- **Node.js** - JavaScript runtime
+- **Express.js** - Web framework
+- **MongoDB** - NoSQL database
+- **Mongoose** - MongoDB ODM
+- **JWT** - Authentication tokens
+- **bcrypt** - Password hashing
+- **CORS** - Cross-origin resource sharing
+- **Validator** - Input validation
+
+## 👥 Team Members
+
+- **Mudit Agarwal** - muditagarwal2022@vitbhopal.ac.in
+- **Karthik Nair** - internplacecarti@gmail.com
+- **Rahul Sharma** - rahulsharma2022@vitbhopal.ac.in
+- **Rushikesh Chaudhari** - rushikeshc2003@gmail.com
+
+## 🤝 Contributing
+
+1. Fork the repository
+2. Create a feature branch (`git checkout -b feature/amazing-feature`)
+3. Commit your changes (`git commit -m 'Add some amazing feature'`)
+4. Push to the branch (`git push origin feature/amazing-feature`)
+5. Open a Pull Request
+
+## 📜 License
+
+This project is licensed under the ISC License.
+
+## 🆘 Support
+
+For support, email any of the team members or create an issue in the repository.
+
+---
+
+**Built with ❤️ by the Swap-Skill Team**
+
