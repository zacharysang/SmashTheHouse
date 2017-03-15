# SmashTheHouse

This is a simple website containing miscellaneous projects, gimmicks and gizmo's to be used primarily by me and my housemates.

# Setup

1. Copy the .env-example file to .env and add values as follows:
..* PORT: The interal port number you would like to host traffic on
..* MONGO_URL: The url addressing the mongo database where persistent storage is kept

2. Install dependencies: `npm install`

3. Run the application with npm (or whatever you want to use to run it): `npm start`


(in the works)
* include manifest of what to include
  * massively configurable
    * colors
    * assets dir
    * sections
  * extremely rapid initial build and deployment
    * crawl and scrape existing
    * build views
    * REGISTER domain name
    * spin up aws instance
    * install application and db
    * build db (mongo scrape all forms)
    * total time: <30 minutes
  * information display
    * menu
    * location search
    * offerings/ deals
    * about
    * hiring
    * community
  * customer check in
  * customer loyalty
* Begin by mimicking existing sites
* Tool to take existing site and to rebase
  * views
  * platform
  * CRUD
* spread manifest as core, allow seemless developer base growth
  * include tests to confirm elligibility
* vendor beginnings, lower barriers for vendor starts

* Components (first 2 points should be able to reproduce existing within 30 mins with single command):
  * Tool to rebase site views and db
    * Scrape site for views and forms
    * Use scraped html to build views
    * Use scraped forms to build db 'schema'
    * Use scraped images and assets to make assets dir
    * Use scraped css and html to make configuration file (colors, segments, etc.)
  * Tool to deploy 
    * register domain name / connect to existing domain name
    * spin up paas instance
    * install db, application and dependencies
  * Tool to reconfigure easily (open to dev)
  * Status monitoring / maintainence portal

