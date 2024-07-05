
# Title

## Personnel Mangement 3000

# Description

This a Personnel Management Tool written for SkillStorm

# Developers
Full Stack Lead Developer [Dustin Yansberg](https://github.com/DustinYansberg)

# Technologies Used

### Database
<img src="https://img.shields.io/badge/mysql-gray?style=for-the-badge&logo=mysql&logoColor=white&labelColor=%234479A1&color=gray"/> 

### Server
<img alt="Static Badge" src="https://img.shields.io/badge/Java-blue?style=for-the-badge&logo=oracle&logoColor=%23F80000"> <img alt="Static Badge" src="https://img.shields.io/badge/Spring_boot-blue?style=for-the-badge&logo=springboot&logoColor=%23%236DB33F">


### Frontend
<img src="https://img.shields.io/badge/javascript-gray?style=for-the-badge&logo=javascript"/> <img alt="Static Badge" src="https://img.shields.io/badge/Spring_boot-blue?style=for-the-badge&logo=angular&logoColor=%230F0F11"> <img src="https://img.shields.io/badge/Material%20UI-gray?style=for-the-badge&logo=mui&logoColor=white&labelColor=%23007FFF&color=gray"/> 

# Why?

This project was made in a short timeline to practice my newly aquired Angular and Java skills. Many organizations need applications that enable seamless personnel management, and I wanted to take a stab at a baseline of this type of application.

# Demo

## Employee and Office Table

The tables are populated with their respective models, and each row can be selected to view more details about the model.

![EmployeeAndOfficeTables](https://github.com/DustinYansberg/personnelManagement/assets/88344280/f9bdb6e0-4c38-4108-b444-2c88155ac5c1)

## Add Employee Or Host

The stepper workflow makes adding a new employee or a new office a breeze.

![AddEmployee](https://github.com/DustinYansberg/personnelManagement/assets/88344280/ba78c8fa-5609-4a46-bfd9-0329f7cab064)

### Safety checks for when an office is at capacity

The application will prevent a user from adding an employee to an office if the office is full. This protection is in place in both the add employee workflow, and the edit employee workflow

In the following videos, The office named "Low Cap" is marked as (full) and we will not be able to add an employee to it.

![CantAddEmployeeIfFull](https://github.com/DustinYansberg/personnelManagement/assets/88344280/f7ef99f1-c506-4fea-879d-82324e52e842)


## Editing An Employee or Office Directly From their details page 

Employees and offices can be edited directly from their details page with the click of a button!
![EditingOfficesgif](https://github.com/DustinYansberg/personnelManagement/assets/88344280/cca586b2-57ee-4b9e-9687-a1048094cc35)

# How to Use

Before you begin, you need to be able to install and run Spring Boot packages. This will require java.

- Clone The Repo
- Use the SQL file found in the SQL folder to build the database. This step will require knowledge of MySQL and MySQL Workbench
- Open the root folder of the repo as a Java project in your preferred IDE and install the packages
- be sure to create your own apllication.properties file and to update the project with the pom.xml
- with SQL and the spring boot app installed sucessfully, run the Java springboot backend
- In your command line, navigate to personnel-management-tool/pmt-angular and run `npm install` to install the required angular packages.
- After npm install completes, run `ng serve` to run the front end server
- in a browser of your choice, navigate to localhost:4200
  
and Voila! have fun!

Things aren't working yet? Feel free to reach out to me directly about it. `DustinYansberg@gmail.com`


# Other technical stuff

The Server logic is written in Java with RESTful API calls for offices and employees. 

The frontend is written in Angular JS with a Material UI component Library.

# Contributing

At this time, I have no specific elements that I am looking for contributions on. As development continues, that may change. If you have any suggestions or questions, please do not hesitate to reach out to me: DustinYansberg@gmail.com
