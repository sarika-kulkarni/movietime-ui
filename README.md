# Movietime UI application

## Technology stack
This is a single page application built using React.
This application build generate two files - js/main.js and css/main.css, which are manually copied to src/main/resources/static directory of Movietime spring boot application to run backend and frontend from same server.
It uses following supporting frameworks along side React:
### React Router
React router is used to implement client side routing for this application
https://reactrouter.com/en/main
### Redux Toolkit (RTK)
Redux toolkit is used to manage the client side state (data) required by application as well as it uses Redux Toolkit Query and Mutation features to fetch and update the data to Movietime spring boot application
https://redux-toolkit.js.org/

## Folder structure
### src
This directory hosts application entry point file "index.js" and main application component
### app
This directory hosts following sub-directories respective react application components
#### components
This directory hosts application components such as Movie, Theater, Booking etc
#### routes
This directory hosts the page components for each route for this application such as /movies, /theater etc.
#### services
This directory contains the service components that call Movietime spring boot application API using Redux Toolkit Query/Mutation features
#### reducers
This directory hosts the reducer functions used to manage the state of application
#### store
This directory contains main Redux store configuration and initial state

## How to run this application
You can run this application using "npm start" command

# How to build this application
Build this application using "npm run build" command