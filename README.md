# Interaction Programing DH2642 - Project "Queuefify" React

## About 
This repository contains the code for project "Queueify", which focuses on the Model-View-Controller framework utilizing React. 

Queueify is an application that uses the Spotify API. The user can choose to either log in as a host with their Spotify account, or as a guest using their google or facebook account. The guest is able to join a new session using a given event ID created by the host. The idea is to use a shared playlist, where users can upvote/downvote songs in the list. They can also add new songs to the list using the search function. The host have the option to remove songs from the playlist. 

### Try it 
The app is hosted on [Heroku](https://signup.heroku.com/?c=70130000000NeLCAA0&gclid=CjwKCAiAiML-BRAAEiwAuWVggkEMhnf3uC02TCfvWUz22oo2ugNs5-ssMwtxYIWx7a5XshM98AiuNBoCxvoQAvD_BwE) and uses automatic deploys that tracks the master branch of this repository.

To test the app,go to [test-queueify.herokuapp.com](https://test-queueify.herokuapp.com/) and start by log in either as a guest or host. 

### What we have done 
- Created user functionality using Firebase authentication
- Created a currentSession page that shows the shared playlist for Host and Guest
- Created DataSource.js that hold API calls used in the app 
- Created search functionality that allows user to search for songs and add them to playlist 
- Created newSession page that allows user to join sessions with session ID and password 
- Created responsive sidebar and navbar

## The API in this project
This application uses the [Spotify API](https://developer.spotify.com/documentation/web-api/) 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to setup this Project 

In the project directory, you can run:

### `npm install` 
Installs all project dependencies

### `npm start`
Compiles and launches the project development server
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build` 
Builds the project into a deployable artifact.
