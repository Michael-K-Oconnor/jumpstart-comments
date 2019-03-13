# Jumpstart Comments

A Node.js service to serve requests for project comments for Jumpstart, a mockup crowdfunding application based off of KickStarter

## Motivation

Jumpstart is a full stack web application that serves as a sandbox for personal exploration of different software development techniques and practices. This application has a microservice architecture with three services, one to serve React.js client-side code and two seperate Node.js backend services handling API requests with an NGINX reverse-proxy routing incoming requests.

## Installation and Setup

There are several ways to run this service.

1. Download it from the Docker image michaelkoconnor/jumpstart-comments hosted on DockerHub [here](https://cloud.docker.com/u/michaelkoconnor/repository/docker/michaelkoconnor/jumpstart-comments) 

2. Clone this repository and build the Docker image locally using the included Dockerfile

3. Clone the [jumpstart-main repository](https://github.com/Michael-K-Oconnor/jumpstart-main.git) and run the following command to initialize all containers required to run the Jumpstart app locally. Note that several of the containers included in the docker-compose file require .env files which are not currently publically available

```bash
docker-compose up
```

## Built With

- Node.js
- Docker
- Postgres
- Knex

## Related

[jumpstart-main](https://github.com/Michael-K-Oconnor/jumpstart-main.git)
- Contains docker-compose file used to initalize all containers of Jumpstart app locally

[jumpstart-reverse-proxy](https://github.com/Michael-K-Oconnor/jumpstart-reverse-proxy.git)
- Contains NGINX reverse-proxy which routes all request for Jumpstart app either to either service which serves client-side code or to appropriate backend service

[jumpstart-frontend](https://github.com/Michael-K-Oconnor/jumpstart-frontend.git)
- Contains NGINX proxy which servers the client-side code for the Jumpstart app. The client is written using React.js and bundled using Webpack

[jumpstart-projects](https://github.com/Michael-K-Oconnor/jumpstart-projects.git)
- Contains projects service for the Jumpstart app, which consists of a Node.js webserver that connects to a Postgres database

[jumpstart-comments](https://github.com/Michael-K-Oconnor/jumpstart-comments.git)
- Contains comments service for the Jumpstart app, which consists of a Node.js webserver that connects to a Postgres database
