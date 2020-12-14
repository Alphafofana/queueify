# Interaction Programing DH2642 - Project "Queueify" React

## About 
This repository contains the code for project "Queueify", which focuses on the Model-View-Controller framework utilizing React. 

Queueify is an application that uses the Spotify API. The user can choose to either log in as a host with their Spotify account, or as a guest using their google or facebook account. The guest is able to join a new session using a given event ID created by the host. The idea is to use a shared playlist, where users can upvote/downvote songs in the list. They can also add new songs to the list using the search function. The host have the option to remove songs from the playlist. 

### Try it 
The app is hosted on [Heroku](https://signup.heroku.com/?c=70130000000NeLCAA0&gclid=CjwKCAiAiML-BRAAEiwAuWVggkEMhnf3uC02TCfvWUz22oo2ugNs5-ssMwtxYIWx7a5XshM98AiuNBoCxvoQAvD_BwE) and uses automatic deploys that tracks the master branch of this repository.

To test the app, go to [test-queueify.herokuapp.com](https://test-queueify.herokuapp.com/) and start by log in either as a guest or host.

### What we have done 
- Created user functionality using Firebase authentication
- Created a currentSession page that shows the shared playlist for Host and Guest
- Created DataSource.js that hold API calls used in the app 
- Created search functionality that allows user to search for songs and add them to playlist 
- Created newSession page that allows user to join sessions with session ID and password 
- Created responsive sidebar and navbar
- Saving data about the sessions in Firebase Firestore, in order to make the session data available to multiple users.
- Utilized Firebase Cloud Functions to make certain API calls to Spotify run backend.  

## The API in this project
This application uses the [Spotify API](https://developer.spotify.com/documentation/web-api/) 

## How to setup this Project 

### Install dependencies:

### `npm install` 
In the project directory **and** in the functions directory, run npm install. 
Installs project dependencies

### `npm install -g firebase-tools` 
Installs firebase-tools globally, so that you can use the Firebase CLI

### **Setup Firebase project:**
1. Create a Firebase project using the [Firebase Developer Console](https://console.firebase.google.com).
2. Enable Billing on your Firebase project by switching to the **Blaze** plan, this is currently needed to be able to perform HTTP requests to external services from a Cloud Function. See the [pricing](https://firebase.google.com/pricing/) page for more details.
3. Click "Add app" in the firebase console and add the firebase config credentials to your local environment variables

**Create and add a service account to your project:**
1. In "Settings" in the firebase console, go to "Service accounts" and create a new service account. You can read more about service accounts here: [Server SDK setup instructions](https://firebase.google.com/docs/server/setup#add_firebase_to_your_app).
2. Save the private key as "./functions/service-account-dev.json".

**Create and setup Spotify app:**
1. Create a Spotify app in the [Spotify Developers website](https://developer.spotify.com/my-applications/).
2. Add the URL `https://localhost/login/popup` or the URL of your hosting website to the **Redirect URIs** of your Spotify app.
3. Copy the **Client ID** and **Client Secret** of your Spotify app and use them to set the `spotify.client_id` and `spotify.client_secret` Google Cloud environment variables. For this use:

    ```bash
    firebase functions:config:set spotify.client_id="yourClientID" spotify.client_secret="yourClientSecret"
    ```
**Deploy your project:**
1. Run `firebase login` to login to your firebase account. 
2. Run `firebase use --add` and choose your Firebase project. This will configure the Firebase CLI to use the correct project locally.
3. Run `firebase deploy` to effectively deploy the sample. The first time the Functions are deployed the process can take several minutes.

### **Run development server:**

### `npm start`
Compiles and launches the project development server
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build` 
Builds the project into a deployable artifact.


