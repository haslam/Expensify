# Expensified

A light and easy expense manager to help keep control of an individual's expenses.

This App utilizes Google's firebase for authentication and database
To run locally:

- ```sh
   yarn install
  ```
- Setup a firebase account (if you don't have one)
- Create a development database and a test database
- Retrieve configuration for both databases and set rules
- create a .env.development file
- create a .env.test file
- insert config into respective .env file e.g `FIREBASE_PROJECT_ID=XXX88XX88XX`
- Enable required signin methods accordingly
- run
  ```sh
  yarn run devServer
  ```
  or
  ```sh
  yarn start
  ```
- run
  ```sh
  yarn test
  ```
  for tests
- visit http://localhost:8080/

You may remove heroku build if not required.
