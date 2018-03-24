# sad2018-bloreateam

sad2018-bloreateam created by GitHub Classroom

Hyper Local Volunteering Marketplace:

Welcome! This projects helps to cater the needs of people who are interested in volunteering and people who are looking for them. It provides filter to a volunteer to choose where and what he can work on.

Understanding the project structure:

You will find the core files divided into views, model and routes :-

•	Model - Model decides the fundamental behavior of the application, it is the data and the data management. In our project model contains js files which interact with database such as connect.js, list.js and look.js

•	View – View is the user interface element of web application which renders the data from the model into a form for appropriate user interface. In our project all the html files which are responsible for UI comes under this section

•	Routes - Controller makes call for view and the model based on the user input to perform appropriate actions

-Volunteer.js is the core application file that invoke required methods and sets up the routes. -Our server is created and configured on the www file.

Installing:

-You can install Webstorm, an IDE for Node js: https://www.jetbrains.com/webstorm/
-You can install mysql from choice of your server like xamp, wamp or mysql itself:
XAMP:https://www.apachefriends.org/download.html
WAMP: http://www.wampserver.com/en/
MYSQL : https://www.mysql.com/
-	From npm terminal install packages by like ejs, googlemaps, mysql and ejs.

-	"dependencies": {
  "body-parser": "^1.18.2",
  "bootstrap-table": "^1.11.2",
  "cookie-parser": "~1.4.3",
  "debug": "~2.6.9",
  "ejs": "^2.5.7",
  "express": "^4.15.5",
  "googlemaps": "^1.12.0",
  "jade": "~1.11.0",
  "morgan": "~1.9.0",
  "mysql": "^2.15.0",
  "node-json2html": "^1.2.0",
  "npm": "^5.7.1",
  "serve-favicon": "~2.4.5",
  "tableify": "^1.1.0",
  "vue-google-maps-location-selector": "^1.0.1"
},
"devDependencies": {
  "@types/googlemaps": "^3.30.8"
}

Authors: 
 
1	Akash Sampathkumar

•	Processing of JSON retrieved from the database to enable the model to send formatted data back to the browser through the route.
•	Development of the template, the is used to format the JSON.
•	Configuration of the www file.

2	Meghana Venkatesh

•	Development of route – List.js: Catching of get request parameters and calling the model to insert user details.
•	Model - Insert.js: Connecting to MySQL db, writing the insert queries to add user data.

3	Deepa Govindappa

•	Design and development of the front-end pages: -
index.html, list.html and look.html

4	Sanketh M. S.

•	Definition of routes and configuration in core app file. 
•	Development of route – Look.js: Catching of get request parameters and calling the model to process user details and retrieve filtered data.
•	Model – Select.js: Connecting to MySQL db, writing the select queries to retrieve relevant information after processing using the haversine formula.


Acknowledgment: We'd like to thank Prof. Hahn for giving us the freedom to select any technology and develop a project that we could relate to in terms of purpose.


