# NaukaAutomat-w
1. Project name - SWAG LABS

This repo contains an E2E automated test suite created in order to aid quality assurance process, save time and cost of SWAG LABS project.

It covers all basic functionality for both, logged in user and not logged in user:

NOT LOGGED IN USER:
- Login - happy path
- Login attempt with wrong credentials
- Login attempt with credentials of a locked out user

LOGGED IN USER:
- Loging out - happy path
- Purchasing products
- Removing products from the basket
- Making sure social media links work as intended
- Making sure the footer displays correct year


2. Testing
- To clone this repo to local directory:

git clone https://github.com/pyb91/Nauka

- To ignite cypress:
npx cypress open

- To install the node_modules
npm install



