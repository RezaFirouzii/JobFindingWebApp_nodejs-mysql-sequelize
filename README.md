# Hire Community: Job finding app - Express & Sequelize
&#11093; Simple job finding and job commercials web application for devs
<h2> Serverside : </h2>
<ul>
  <li> MySql </li>
  <li> express </li>
  <li> node.js </li>
</ul>

<h2> Clientside : </h2>
<ul>
  <li> EJS </li>
  <li> CSS </li>
  <li> fetch API </li>
</ul>

<h4> &#128312; This application reads and creates devs employment commercials.</h4>
<h4> &#128313; Special search functionality implemention with Sequelize.</h4>
<h4> &#128312; ORM model (Sequelize) with MySql + Simple serverside form validation.</h4>
<h4> &#128313; EJS template engine and CSS animations.</h4><br>

<h5> &#128308; Make sure MySql is installed on your PC.</h5>
<h5> &#128308; Put your own MySql database name, username & password in /config/db.js file.</h5>
<h5> &#128308; Copy and run the query below to create a table called  'commercials'  in your database :</h5>
<code><pre>
  CREATE TABLE `commercials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `technologies` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `budget` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `contact_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;</pre>
</code>

<h2> Preview :</h2>
<ol>
  <li>Home Page :</li><br>
  <img src="https://github.com/RezaFirouzii/JobFinding_WebApplication/blob/master/public/images/preview1.jpg?raw=true">
  <hr>
  <li>Commercials Page :</li><br>
  <img src="https://github.com/RezaFirouzii/JobFinding_WebApplication/blob/master/public/images/preview2.jpg?raw=true">
  <hr>
  <li>New Commercial Page :</li><br>
  <img src="https://github.com/RezaFirouzii/JobFinding_WebApplication/blob/master/public/images/preview3.jpg?raw=true">
</ol>
