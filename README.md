# Project Store Manager

- Project to develop a RESTful API (CRUD) for a dropshipping based sales system, using MSC Architecture.

## Requirements

1. Create endpoint to list products in `/products` and `/products/:id` ✔️
2. Develop tests to cover at least `5%` of application layers ✔️
3. Create endpoint to register products in `/products` ✔️
4. Create product registration validations ✔️
5. Develop tests to cover at least `10%` of application layers ✔️
6. Create endpoint to validate and register sales in `/sales` ✔️
7. Develop tests to cover at least `15%` of application layers ✔️
8. Create endpoint to list sales in `/sales` and `/sales/:id` ✔️
9. Develop tests to cover at least `20%` of application layers ✔️
10. Create endpoint to update product by id in `/products/:id` ✔️
11. Develop tests to cover at least `25%` of application layers ✔️
12. Create endpoint to delete product by id in `/products/:id` ✔️

## Bonus Requirements

13. Develop tests to cover at least `30%` of application layers ✔️
14. Create endpoint to delete sale by id in `/sales/:id` ✔️
15. Develop tests to cover at least `35%` of application layers ✔️
16. Create endpoint to update sale by id in `/sales/:id` ✔️
17. Develop tests to cover at least `40%` of application layers ✔️
18. Create endpoint to search product by query (`products/search?q=searchTerm`) in `/products/search` ✔️
19. Develop tests to cover at least `50%` of application layers ✔️
20. Develop tests to cover at least `60%` of application layers ✔️
 
## Language and Tools

<a href="https://www.mysql.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="30" height="30"/> </a>
MySQL
</br>
</br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="30"/> </a>
JavaScript
</br>
</br>
<a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="30" height="30"/> </a>
Node.js
</br>
</br>
<a href="https://mochajs.org" target="_blank"> <img src="https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg" alt="mocha" width="30" height="30"/> </a>
Mocha
</br>
</br>
<a href="https://sinonjs.org/" target="_blank"> <img src="https://sinonjs.org/assets/images/logo.png" alt="sinon" width="30" height="30"/> </a>
Sinon
</br>
</br>
<a href="https://www.chaijs.com/" target="_blank"> <img src="https://camo.githubusercontent.com/7ecbd4531436e4f20c1dba52a4fd4ac367cfcc20a2f62cfe7a10f32da306afc6/687474703a2f2f636861696a732e636f6d2f696d672f636861692d6c6f676f2e706e67" alt="chai" width="30" height="30"/> </a>
Chai

## Get started

<details>
  <summary><strong> With Docker </strong></summary>
  </br>
  👉 Dockerfile and Docker-compose were provided by Trybe
  
  ⚠️ Before you start, you must check if your docker-compose version is 1.29 or higher
  </br>
  
  - Run `node` and `db` by running: 
  ```sh
  $ docker-compose up -d
  ```
  
  - Open interactive terminal using:
  ```sh
  $ docker exec -it store_manager bash
  ```
  
  - Install dependencies, inside the container, with: 
  ```sh
  $ npm install
  ```
</details>

<details>
  <summary><strong> Install it locally </strong></summary>
  </br>
  
  - Open terminal and create a directory in your preferred location:
  ```sh
  $ mkdir <Your directory name here>
  ```
  
  - Access directory then clone the repository:
  ```sh
  $ cd <Your directory name here>
  $ git clone git@github.com:ViniGB/Project-Store-manager.git
  ```
  
  - Access the newly created directory:
  ```sh
  $ cd Project-Store-manager
  ```
  
  - Install dependencies:
  ```sh
  $ npm install
  ```
</details>