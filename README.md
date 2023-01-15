<div align="center">
  <h1>
    Quotes api
  </h1>
  <blockquote>
    A rest api for quotes. Made with express.js and typeORM.
  </blockquote>
  <div id="badges">
    <img src="https://img.shields.io/github/repo-size/carlos3g/expo-starter?color=4000FF" alt="repo-size" />
    <img src="https://img.shields.io/github/issues-raw/carlos3g/expo-starter?color=4000FF" alt="issues" />
    <img src="https://img.shields.io/badge/license-MIT-4000FF" alt="license" />
  </div>
</div>

<div align="center">

This is a rest api for quotes. Users can login and favorite quotes. See [Features](#-features)

</div>

## Table of contents

- [Features](#-features)
- [How to run](#-how-to-run)
  - [With docker](#with-docker)
  - [Without docker](#without-docker)
- [Database Model](#-database-model)
- [Technologies](#-technologies)
- [Documentation](#-documentation)
- [How to contribute](#-how-to-contribute)
- [License](#-license)

## 💻 Features

- Authentication
- Favorite _quotes_
- Create/Delete/Update _users_
- Create/Delete/Update _authors_
- Get one or all _authors_
- Create/Delete/Update _quotes_
- Get one or all _quotes_
- Get _quotes_ by _author_

## 🚀 How to run

### With docker

> This is a development Dockerfile.

```bash
# Runs app (dev):
docker-compose up -d

# Runs migrations (exec this only once):
docker exec quotes-api yarn db:dev:migrations

# Runs seeders (exec this only once):
docker exec quotes-api yarn db:dev:seeders
```

### Without docker

```bash
# Installs dependencies:
yarn install

# Runs app (dev):
yarn dev:start

# Runs migrations:
yarn db:dev:migrations

# Runs seeders:
yarn db:dev:seeders
```

## Database model

> ER Diagram was made using [draw.io](https://draw.io)

![quotes-api-mer](https://user-images.githubusercontent.com/52337966/212559007-f09cc46a-d585-4412-8d2e-d75a1d1cc150.png)

## 🛠 Technologies

- API rest with `express`
- Validate requests with `express-validator`
- Handling database with `typeorm`
- Migrations and seeders
- Documentation made with `swagger`
- Using `dotenv` for sensive keys

## 📝 Documentation

> Docs were made using swagger.

Documentation is served at route `/api-docs`. So just run the app and check it!

## 🤝 How to contribute

- Is there any problem? Found a bug? Do you have any tips? Open an [issue](https://github.com/carlos3g/expo-starter/issues) describing it.

- Want to contribute code? First read [this contribution guide](https://github.com/firstcontributions/first-contributions)

- Don't forget to leave your star ⭐, it is also a way to contribute to the project

## 📝 License

This project is under the MIT license. See [LICENSE](LICENSE) for more details.

---

<div align="center">

Created by [Carlos Mesquita](https://github.com/carlos3g) 💜

</div>
