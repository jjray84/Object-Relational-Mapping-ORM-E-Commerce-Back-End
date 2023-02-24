# E-Commerce Back End
Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.


## Table of Contents
[Installation](#Installation)     
[Usage](#Usage)      


## Installation

After cloning the repository, make sure you have NodeJS installed and run the following command in your Integrated Terminal:     
```ruby
npm i
```  

After you have installed the npm package, you will need to sign in to MySql in your integrated terminal.  If you have not set this up previously, please follow the instructions [here](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide).     

After you have signed in, you will need to use the database that is set up for you in the db folder.  To do this, please use the following command in your MySql.     
```
SOURCE schema.sql
```     

Once you have done that, please type in "quit" into your MySql to return to your Integrated Terminal.  Once done, please, type the following command into your terminal to have full access to the seed data in the code.    
```
npm run seed
```     
Additionally, if you have not already done so, please visit the [Insomnia Website](https://insomnia.rest/) in order to access all the data needed.     
     
          
## Usage     

Once all of those steps are completed, you need to type in the following command into the command line of your integrated terminal to start the server for insomnia to run properly.     
```
node server.js
```     

In insomnia, there are multiple ways to access the data. Here are the main ones you will use.

### GET:
* //localhost:3001/api/products
* //localhost:3001/api/tags
* //localhost:3001/api/categories     
* //localhost:3001/api/products/1     
* //localhost:3001/api/tags/2     
* //localhost:3001/api/categories/3     


### POST:
* //localhost:3001/api/products/
    * {"product_name": "Baseball", "price": "30.00", "stock": 10, "tagIds": [1, 2, 3, 4, 5]}     
* //localhost:3001/api/categories/
    * {"category_name": "Sunglasses"}     
* //localhost:3001/api/tags/     
    * {"tag_name": "Great Shades!"}     


### PUT:         
* //localhost:3001/api/products/6     
    * {"product_name": "NFL Regulation Football", "price": "175.00", "stock": 5, "tagIds": [1, 2, 3, 4, 5]}     
* //localhost:3001/api/categories/5
    * {"category_name": "Eye Protection"}    
* //localhost:3001/api/tags/3     
    * {"tag_name", "Great Value"}     
         
              
### DELETE:     
* //localhost:3001/api/products/1      
* //localhost:3001/api/categories/1     
* //localhost:3001/api/tags/3     

[Click here](https://github.com/jjray84/Object-Relational-Mapping-ORM-E-Commerce-Back-End) to be taken to the repository for this project.     
     
[Click here](https://drive.google.com/file/d/1uz0UxBdloqHgiGZXgDlP08QJbYKvCW5C/view) for the walkthrough video.     
