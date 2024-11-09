# QuasaTran
A Quasar application using Firebase for authentication and storage, alongside MongoDB for data management.
# QuasaTran - Quasar App with Firebase and MongoDB Integration

## Description
QuasaTran is a web application built using the Quasar Framework. It leverages Firebase for authentication and image storage, and MongoDB for handling structured data. This project serves as a social media platform where users can upload photos, set dynamic avatars, and more.

## Features
- **Authentication**: Firebase Authentication to securely manage user logins and signups.
- **Image Storage**: Firebase Storage for uploading and managing user photos.
- **Data Management**: MongoDB to store and retrieve structured user and transaction data.
- **Role-Based Access**: Admin and User roles with tailored access to resources.
- **Dynamic Avatar Selection**: Allows users to select an image as their avatar.
- **Responsive PWA**: Fully responsive Progressive Web App (PWA) experience with support for both mobile and desktop views.

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/jkacare2020/QuasaTran.git

## Frontend
cd quasagram-23M
npm install

## cd backend
## npm install

## Firebase Setup
## Create a Firebase project.
## Enable Firebase Authentication and Firebase Storage.

## Get your Firebase configuration details and update .env files in both frontend and backend.
## Frontend (.env in root)
VUE_APP_API_LOCAL="http://localhost:3000"
VUE_APP_API_PRODUCTION="https://your-heroku-backend.herokuapp.com"
VUE_APP_FIREBASE_API_KEY="your-api-key"
VUE_APP_FIREBASE_AUTH_DOMAIN="your-auth-domain"
VUE_APP_FIREBASE_PROJECT_ID="your-project-id"
VUE_APP_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
VUE_APP_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
VUE_APP_FIREBASE_APP_ID="your-app-id"

## Backend (.env in backend folder)
MONGODB_URL="your-mongodb-url"
VUE_APP_BACKEND_URL="https://your-heroku-backend.herokuapp.com"

# Usage
Running the App Locally
## Backend
## cd backend
## npm start

## Frontend
cd ..
quasar dev

# Deploy
## Frontend (Firebase)
quasar build
firebase deploy

## Backend (Heroku)
cd backend
git push heroku main

# License
This project is licensed under the MIT License.
This README provides a comprehensive overview and setup instructions for your project. Let me know if you'd like to adjust any section!

