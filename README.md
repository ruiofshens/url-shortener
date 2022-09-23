# url-shortener

Built with React, Node.js, Express and MySQL, together with tools such as Postman and Docker.

<p float="left">
  <img src="screenshots\frontendinterface.png" alt="desktop screenshot" width="55%" height="55%">
  <img src="screenshots\backend.png" alt="desktop screenshot" width="55%" height="55%">
</p>


## Features

- Full-stack mobile-friendly application that provides a URL shortening service
- Persistent MySQL DB for mapping between shortened and original URLs
- Routing to redirect users to original URLs if shortened URLs are entered

## Setup Instructions

- This application has been dockerized for easy deployment across different platforms and the public cloud, hence all you need is to have Docker installed on your computer.
- Go to the root folder with <code>docker-compose.yml</code> and run: <code>docker-compose up -d --build</code>.
- After a while, you should see 3 containers being built altogether: nodeappcontainer on port 5000, reactappcontainer on port 3000 and mysqlcontainer on port 3306. 
- You can access the frontend through http://localhost:3000/ and the backend through http://localhost:5000/.
