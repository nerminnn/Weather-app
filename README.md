# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Table of Contents
* [Get data](#get-data)
* [Post data](#post-data)
* [Update UI](#update-UI)

## Instructions

Make sure you install:
 * Node.js 
 * express
 * body-parser 
 * cors

```
npm init
```
```
npm i express body-parser cors 
```
The app should be running on localhost:3000.

The server setup located in `server.js` file and the project main folder `website`. You can check `app.js`, `index.html` for element references and `style.css` for the styling of the web app.

## Get data
---
Async function in `app.js` uses fetch() to make a GET request to get  API data from the (https://OpenWeatherMap.com).


## Post data
---
Async function in `app.js` uses fetch() to make a POST request to add the API data as well as data entered by the user to your app by using the path of POST route we setup in `server.js` file that adds incoming data to projectData obj as endpoint for all routes.
The POST route should receiving three pieces of data from the request body
* temperature
* date
* how user feels at the moment 


## Update UI
---
Async function in `app.js` uses fetch(), called after the completed POST request. This function retrieve data from projectData by using the path of GET route that returns the projectData object.



 
