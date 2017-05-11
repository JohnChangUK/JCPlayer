# JCPlayer

JCPlayer is a podcast audio streamer with search functionality. Users can search for podcasts using the iTunes search API and stream directly through the browser.

## Technologies Used
- React.js: A declarative, efficient, and flexible JavaScript library for building user interfaces. 
- Redux: A predictable state container for JavaScript apps and a concept of data storing and communication within an application in the client-side (in the browser). Redux provides an easy way to centralise the state of applications.
- Node.js: A server-side platform built on Google Chrome's JavaScript Engine (V8 Engine).
- Express.js: Express is a light-weight web application framework to help organize your web application into an MVC architecture   on the server side.
- Webpack: A module bundler which takes modules with dependencies and generates static assets representing those modules.

## Heroku: Open Chrome Developer Tools and view in iPhone 6/Mobile view - [JCPlayer](http://jcplayer.herokuapp.com/)

# A diagram I created to break down the Redux Cycle

![alt_tag](https://github.com/JohnChangUK/JCPlayer/blob/master/redux.png)

- The strength behind Redux is React.  Given a set of configuring data, React can effortlessly change the visible DOM from one state to another.  Redux builds upon this by being a predictable state container.  That is, it provides reasonable and predictable ways of maintaining your applications state in one place and making tweaks to it.  When you pair this with React, you get an application where you can glance at your data, glance at your views, make one change to your data, and have a reasonable suspicion about how your views will update

## User Stories

```
As a User,
So that I can listen to podcasts,
I want to be able to open an App where podcasts are saved.
```
```
As a User,
So that I do not need to install an application,
I want to be able to open a browser and search for the podcast player.
```
```
As a User,
So that I can listen to podcasts,
I want to be able to open an App where podcasts are saved.
```
```
As a User,
So that it's easy to use the app,
I want it to have a simple user interface.
```
```
As a User,
So that I can enjoy using the podcast,
I want the podcast to look modern.
```

# JCPlayer live on mobile device (iPhone 6) 
## Search for a category e.g. "Sports"

<img src="https://github.com/JohnChangUK/JCPlayer/blob/master/Pic%202.png" height="650" width="400">

# Search results for "Sports"

<img src="https://github.com/JohnChangUK/JCPlayer/blob/master/Pic%203.png" height="650" width="400">

# When user has made their selection, the Podcast renders onto the Playlist

<img src="https://github.com/JohnChangUK/JCPlayer/blob/master/Pic%204.png" height="650" width="400">

# Able to minimise

<img src="https://github.com/JohnChangUK/JCPlayer/blob/master/Pic%205.png" height="650" width="400">
