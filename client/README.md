# { communITy study }

This is the capstone (final project) of the Web Development Bootcamp Program at BrainStation.
This platform was created to connect people from all over the world, so they can study together, support each other, share their experiences, learn from and with each other, increase their network, make new friends, and much more!

## Table of Contents

- [Installation](#installation)
- [Screenshots](#screenshots)
- [Run Locally](#run-locally)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Next Steps](#next-steps)

## Installation

- Create an .env file in the client folder with the following:

```bash
REACT_APP_FIREBASE_API_KEY=<FIREBASE_API_KEY>
REACT_APP_FIREBASE_AUTH_DOMAIN=<FIREBASE_AUTH_DOMAIN>
REACT_APP_FIREBASE_PROJECT_ID=<FIREBASE_PROJECT_ID>
REACT_APP_FIREBASE_STORAGE_BUCKET=<IREBASE_STORAGE_BUCKET>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<FIREBASE_MESSAGING_SENDER_ID>
REACT_APP_FIREBASE_APP_ID=<FIREBASE_APP_ID>
REACT_APP_FIREBASE_MEASUREMENT_ID=<FIREBASE_MEASUREMENT_ID>
```

- Create a Firebase service key file.

## Run Locally

Clone the project

```bash
  git clone https://github.com/alinebellozo/aline-bellozo-capstone
```

Go to the project directory

```bash
  cd client
```

Start the server

```bash
  npm start
```

## Screenshots

### Homepage

- On the top right, there are the options to Log In or Sign Up.

![homepage](https://user-images.githubusercontent.com/81250078/208345200-3cdc6107-76d9-4b83-a7f5-0cf88e18928c.png)

### Login Page

- Authentication for login with email and password created with Firebase.

![Login Page](https://user-images.githubusercontent.com/81250078/208345409-dcd7e503-2ed6-4651-af95-6712441763ff.png)

### Sign Up Page

- Authentication for Sign Up with email, password, and password confirmation created with Firebase.

![Sign Up Page](https://user-images.githubusercontent.com/81250078/208345507-c4d9c0e7-478a-499a-8258-da4efde47526.png)

### Form Page

- Registration of a new user created with Firebase/Firestore.

![Form Page](https://user-images.githubusercontent.com/81250078/208345575-066055a1-dfd1-4ce1-a5f9-af1c888ab89d.png)

### Dashboard

- Page where the user has access to features after they register (on the left).

![Dashboard](https://user-images.githubusercontent.com/81250078/208345642-3ef206df-fe3e-44d4-8d2b-890895de9438.png)

## Tech Stack

- React 18.2
- Boostrap 5 (for styling)
- Sass 1.56 (for styling)
- Firebase 9 (for Auth and CRUD)

## Next steps

- Work on the features for students in the Dashboard page, starting with the chat for them to communicate.

- Work on the About page.

- Work on the Events page, so the students can organize in-person study sessions, and also be up to date on events related to IT that they might be interested in participating.

- Work on User profile, so the student can edit, update or delete their profile at any time.
