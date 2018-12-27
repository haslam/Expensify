**Expensified**

A light and easy expense manager to help keep control of an individual's expenses.

This App utilizes Google's firebase for authentication and database
To run locally:

1.  `yarn install`
2.  Setup a firebase account (if you don't have one)
3.  Create a development database and a test database
4.  Retrieve configuration for both databases and set rules
5.  create a .env.development file
6.  create a .env.test file
7.  insert config into respective .env file e.g `FIREBASE_PROJECT_ID=XXX88XX88XX`
8.  Enable required signin methods accordingly
9.  run `yarn run devServer` or `yarn start`
10. run `yarn test` for tests
11. visit `http://localhost:8080`

You may remove heroku build if not required.
