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

This is a rest api for quotes. Here you can do CRUD operations and filtering with quotes and author entities.

![quotes-api-mer](https://user-images.githubusercontent.com/52337966/210654966-11a7cdea-a494-4977-916d-ebf7d7c508fe.png)

</div>

## Table of contents

- [Features](#-features)
- [How to run](#-how-to-run)
  - [With docker](#with-docker)
  - [Without docker](#without-docker)
- [Technologies](#-technologies)
- [How to contribute](#-how-to-contribute)
- [License](#-license)

## 💻 Features

- Create/Delete/Update _authors_
- Get one or all _authors_
- Create/Delete/Update _quotes_
- Get one or all _quotes_
- Get _quotes_ by _author_

## 🚀 How to run

### With docker

```bash
# Runs app:
docker-compose up -d

# Runs migrations:
yarn db:migrations

# Runs seeders:
yarn db:seeders
```

### Without docker

```bash
# Installs dependencies:
yarn install

# Build and run app:
yarn build:start

# Runs migrations:
yarn db:migrations

# Runs seeders:
yarn db:seeders
```

## 🛠 Technologies

- API rest with `express`
- Validate requests with `express-validator`
- Handling database with `typeorm`
- Migrations and seeders
- Using `dotenv` for sensive keys

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