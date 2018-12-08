babel src/app.js --out-file=public/scripts/app.js --presets=env, react


Add env vars to heroku
- heroku config  // prints all env variables
- heroku config:set  // allows setting env variables e.g heroku config:set KEY=value
- heroku config:unset //removes env variable e.g heroku config:unset KEY [removes KEY env var]