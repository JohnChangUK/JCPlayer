# JCPlayer

JCPlayer is a podcast audio streamer with search functionality. Users can search for podcasts using the iTunes search API and stream directly through the browser.

## Technologies Used
- React: A declarative, efficient, and flexible JavaScript library for building user interfaces. 
- Redux: A predictable state container for JavaScript apps and a concept of data storing and communication within an application in the client-side (in the browser). Redux provides an easy way to centralise the state of applications.
- Node: Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine).
- Express: Express is a light-weight web application framework to help organize your web application into an MVC architecture   on the server side.
- Webpack: A module bundler which takes modules with dependencies and generates static assets representing those modules.

## JCPlayer, live on mobile device (iPhone 6/7 Plus)
![alt_tag](https://github.com/JohnChangUK/JCPlayer/blob/master/1.png)

## Search for a category e.g. "Sports"
![alt_tag](https://github.com/JohnChangUK/JCPlayer/blob/master/2.png)

## Search results for "Sports"
![alt_tag](https://github.com/JohnChangUK/JCPlayer/blob/master/3.png)

## When user has made their selection, the Podcast renders onto the Playlist
![alt_tag](https://github.com/JohnChangUK/JCPlayer/blob/master/4.png)

## Able to minimise
![alt_tag](https://github.com/JohnChangUK/JCPlayer/blob/master/5.png)

## A diagram I created to break down the Redux Cycle

![alt_tag](https://github.com/JohnChangUK/JCPlayer/blob/master/redux.png)

- The strength behind Redux is React.  Given a set of configuring data, React can effortlessly change the visible DOM from one state to another.  Redux builds upon this by being a predictable state container.  That is, it provides reasonable and predictable ways of maintaining your applications state in one place and making tweaks to it.  When you pair this with React, you get an application where you can glance at your data, glance at your views, make one change to your data, and have a reasonable suspicion about how your views will updat
