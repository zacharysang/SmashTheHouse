# SmashTheHouse

This is a simple website containing miscellaneous projects, gimmicks and gizmos to be used primarily by me and my housemates.

# Setup

1. Copy the .env-example file to .env and add values as follows:
  * PORT: The interal port number you would like to host traffic on
  * MONGO_URL: The url addressing the mongo database where persistent storage is kept

2. Install dependencies: `npm install`

3. Run the application with pm2 (or whatever you want to use to run it): `pm2 start`

# Recommended CLI's

* express-generator - Used to make project skeleton
* pm2 - Used for daemonizing the app.js instance
* node-gh - Used to seemlessly create, close, and generally manage issues
