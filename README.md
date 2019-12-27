<h1 align="center">
  <img alt="GoStack" title="GoStack" src=".github/logo-gostack-black.png" width="200px" />
</h1>

<h3 align="center">
  Rocketseat's final bootcamp challenge. 
  <p>GoBarber is a control and interaction system between the barber shop and its customers. You can log in, register barbers and customers. It is also possible to schedule schedules with the barber of your choice.</p>
</h3>

<p align="center">
  <img alt = "Última confirmação do Github" src = "https://img.shields.io/github/last-commit/joaogasparr/gostack-gobarber">
  <img alt = "Idioma principal do GitHub" src = "https://img.shields.io/github/languages/top/joaogasparr/gostack-gobarber">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/joaogasparr/gostack-gobarber?color=%2304D361">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/joaogasparr/gostack-gobarber/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/joaogasparr/gostack-gobarber?style=social">
  </a>
</p>

## :rocket: Getting Started

The following instructions show the walkthrough of how to copy the project to run on local machine for development and testing purposes.

### Prerequisites

- [Git](https://git-scm.com)
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Docker](https://docs.docker.com/install/)

### Installing

A step by step series of examples that tell you how to get a development env running

```
# Run the following command in a local directory to copy the project.

$> git clone https://github.com/joaogasparr/gostack-gobarber.git
```

### :books: Databases

The first thing you must do is configure all database settings. To do this, follow the steps below at the terminal.

```
$> docker run --name postgresql -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:11

$> docker run --name mongodb -p 27017:27017 -d -t mongo

$> docker run --name redis -p 6379:6379 -d -t redis:alpine
```

### :gear: Back-end

```
# First install back-end dependencies
$> cd ./backend/ && yarn

# Create the .env file by copying from .env.example and replace the information
$> cp .env.example .env

# Start back-end service
$> yarn dev
```

### :computer: Front-end

```
# First install front-end dependencies
$> cd ./frontend/ && yarn

# Then run app
$> yarn start
```

### :iphone: Mobile

```
# First install mobile dependencies
$> cd ./mobile/ && yarn

# Create the .env file by copying from .env.example and replace the information
$> cp .env.example .env

# Second step start metro bundler
$> yarn start or yarn start --reset-cache

Then run the app on android
$> react-native run-android or yarn android

Then run the app on iOS
$> cd ./ios/ && pod install && cd ..
$> react-native run-ios or yarn ios

```

---

## :memo: Licença

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

---

Made with ♥ by João Vitor Gaspar :wave: [See my linkedin!](https://www.linkedin.com/in/jo%C3%A3o-vitor-gaspar-b1b527170/)
